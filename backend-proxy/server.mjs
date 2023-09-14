import express from 'express'
import axios from 'axios'
import cors from 'cors'
import NodeCache from 'node-cache'
import { checkCache, getCache } from './cache.js'
import { getIGDBAccessToken } from './auth.js'

const app = express()
const PORT = 3001
const { IGDB_CLIENT_ID, IGDB_SECRET } = process.env
const gamesCache = new NodeCache({ stdTTL: 24 * 60 * 60 })

if (!IGDB_CLIENT_ID || !IGDB_SECRET) {
  console.error('Missing environment variables. Exiting.')
  process.exit(1)
}

function replaceCoverSize(url, size = 't_cover_big') {
  if (!url) return url
  return url.replace(/t_[a-z_]+/, size)
}

app.use(cors())
app.use('/fetchGames', (req, res, next) =>
  checkCache(req, res, next, 'gamesData')
)
app.use('/fetchGames', getCache)

app.get('/fetchGames', async (req, res) => {
  try {
    console.log('Fetching from API')
    const accessToken = await getIGDBAccessToken()

    const response = await axios({
      method: 'post',
      url: 'https://api.igdb.com/v4/games',
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: `Bearer ${accessToken}`
      },
      data: 'fields name,summary,cover.url,genres,platforms.name,platforms.platform_logo,screenshots.url,rating,release_dates.y; where platforms = (6,130,167,49,169,48) & cover.url != null & release_dates.y > 2022; sort release_dates.y desc; limit 10;'
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

    gamesCache.set('gamesData', gameData) // Store in cache
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
