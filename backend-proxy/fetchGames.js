import axios from 'axios'
import { getIGDBAccessToken } from './auth.js'
import { processGameImages } from './helpers.js'
import { setCache } from './cache.js'

async function fetchGames(req, res) {
  try {
    console.log('Fetching from API...')
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

    // Since we expect an array of games, ensure that the response data is an array
    if (!Array.isArray(response.data) || response.data.length === 0) {
      console.error('Unexpected response structure from IGDB.')
      return res.status(500).send('Unexpected response from IGDB.')
    }

    // Directly use the response data, as it will be the array of games
    const gameData = response.data.map((game) => processGameImages(game))

    setCache('gamesData', gameData)

    res.json(gameData)
  } catch (error) {
    console.error(
      'Error fetching data from IGDB:',
      error.response ? error.response.data : error
    )
    res.status(500).send('Error fetching from IGDB.')
  }
  console.log('....fetching complete')
}

export default fetchGames
