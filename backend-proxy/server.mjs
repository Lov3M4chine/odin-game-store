import express from 'express'
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv'
import NodeCache from 'node-cache'

dotenv.config()

const app = express()
const PORT = 3001
const TWITCH_TOKEN_ENDPOINT = 'https://id.twitch.tv/oauth2/token'

async function getIGDBAccessToken() {
  const { IGDB_CLIENT_ID, IGDB_SECRET } = process.env
  if (!IGDB_CLIENT_ID || !IGDB_SECRET) {
    console.error(
      'Missing environment variables. Please ensure all required variables are set.'
    )
    process.exit(1)
  }

  const url = `${TWITCH_TOKEN_ENDPOINT}?client_id=${IGDB_CLIENT_ID}&client_secret=${IGDB_SECRET}&grant_type=client_credentials`

  const response = await axios.post(url)

  if (response.status < 200 || response.status >= 300) {
    throw new Error('Failed to obtain access token')
  }

  return response.data.access_token
}

function replaceCoverSize(url, size = 't_cover_big') {
  if (!url) return url // Check to make sure the url exists
  return url.replace(/t_[a-z_]+/, size)
}

// Setting up the cache
const myCache = new NodeCache({ stdTTL: 24 * 60 * 60 }) // Standard TTL as 24h

// Enable CORS for all routes
app.use(cors())

app.get('/fetchGames', async (req, res) => {
  // Check if data is in cache
  const cachedGames = myCache.get('gamesData')
  if (cachedGames) {
    return res.json(cachedGames)
  }

  try {
    const accessToken = await getIGDBAccessToken()

    const response = await axios({
      method: 'post',
      url: 'https://api.igdb.com/v4/games',
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: `Bearer ${accessToken}`
      },
      data: 'fields name,summary,cover.url,genres,platforms.name,screenshots.url,rating,release_dates.y; where platforms = 6 & rating != null & cover.url != null; sort rating desc; limit 500;'
    })

    console.log(JSON.stringify(response.data, null, 2))

    // Since we expect an array of games, ensure that the response data is an array
    if (!Array.isArray(response.data) || response.data.length === 0) {
      console.error('Unexpected response structure from IGDB.')
      return res.status(500).send('Unexpected response from IGDB.')
    }

    // Directly use the response data, as it will be the array of games
    const gameData = response.data.map((game) => {
      if (game.cover && game.cover.url) {
        game.cover.url = replaceCoverSize(game.cover.url, 't_cover_big')
      }

      if (game.screenshots) {
        game.screenshots = game.screenshots.map((screenshot) => {
          if (screenshot.url) {
            screenshot.url = replaceCoverSize(
              screenshot.url,
              't_screenshot_huge'
            )
          }
          return screenshot
        })
      }

      return game
    })

    myCache.set('gamesData', gameData)
    res.json(gameData)
  } catch (error) {
    console.error(
      'Error fetching data from IGDB:',
      error.response ? error.response.data : error
    )
    res.status(500).send('Error fetching from IGDB.')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
