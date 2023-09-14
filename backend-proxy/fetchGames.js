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

    const endpoint = req.endpoint
    const data = req.dataFieldParameters

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
    const gameData = response.data.map((game) => processGameImages(game))
    setCache('gamesData', gameData)
    res.json(gameData)
  } catch (error) {
    if (!(error instanceof IGDBError || error instanceof APIResponseError)) {
      logAPIErrorResponse(error)
    }
    next(error)
  }
  console.log('....fetching complete')
}
