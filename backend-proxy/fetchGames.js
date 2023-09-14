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
