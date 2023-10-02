import axios from 'axios'
import { getIGDBAccessToken } from './auth.js'
import { processGameImages } from './helpers.js'
import { setCache } from './cache.js'
import { APIResponseError, IGDBError } from './errorHandlers/errorClasses.js'
import {
  logAPIErrorResponse,
  validateIGDBResponse
} from './errorHandlers/validateFunctions.js'

export default async function fetchGames(req, res, next) {
  try {
    console.log('Fetching from API...')
    const accessToken = await getIGDBAccessToken()
    const data = req.dataFieldParameters
    const dataType = req.query.dataType

    // Initial fetch from the API
    const response = await axios({
      method: 'post',
      url: 'https://api.igdb.com/v4/games',
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: `Bearer ${accessToken}`
      },
      data: data
    })

    validateIGDBResponse(response)

    // Process and prepare initial data
    let games = response.data.map((game) => processGameImages(game))

    // Filtering logic for "recently released"
    if (dataType === 'recentlyReleased' || dataType === 'comingSoon') {
      games = games.filter((game) => {
        return game.release_dates && game.release_dates.length === 1
      })
    }

    // Set cache with data
    setCache(req, `gamesData-${dataType}`, games)

    res.json(games)
  } catch (error) {
    if (!(error instanceof IGDBError || error instanceof APIResponseError)) {
      logAPIErrorResponse(error)
    }
    next(error)
  }
  console.log('....fetching complete')
}
