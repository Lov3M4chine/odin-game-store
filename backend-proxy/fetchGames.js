import axios from 'axios'
import { getIGDBAccessToken } from './auth.js'
import { processGameImages } from './helpers.js'
import { setCache } from './cache.js'
import { APIResponseError, IGDBError } from './errorHandlers/errorClasses.js'
import {
  logAPIErrorResponse,
  validateIGDBResponse
} from './errorHandlers/validateFunctions.js'
import fetchGenresByIds from './fetchGenres.js'

export default async function fetchGames(req, res, next) {
  try {
    console.log('Fetching from API...')
    const accessToken = await getIGDBAccessToken()
    const endpoint = req.endpoint
    const data = req.dataFieldParameters
    const dataType = req.query.dataType

    // Initial fetch from the API
    const response = await axios({
      method: 'post',
      url: endpoint,
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: `Bearer ${accessToken}`
      },
      data: data
    })

    validateIGDBResponse(response)

    // Process and prepare initial data
    const games = response.data.map((game) => processGameImages(game))

    // Extract unique genre by ID
    const uniqueGenreIds = [...new Set(games.flatMap((game) => game.genres))]

    // Parallel fetches for additional data
    const [genresData] = await Promise.all([
      fetchGenresByIds(uniqueGenreIds, accessToken)
    ])

    // Enrich primary data with additional data
    const enrichedGames = games.map((game) => ({
      ...game,
      genres: game.genres.map((id) => genresData[id] || id)
    }))

    //Set cache with enriched data
    setCache(`gamesData-${dataType}`, enrichedGames)
    res.json(enrichedGames)
  } catch (error) {
    if (!(error instanceof IGDBError || error instanceof APIResponseError)) {
      logAPIErrorResponse(error)
    }
    next(error)
  }
  console.log('....fetching complete')
}
