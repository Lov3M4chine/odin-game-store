import { setCache } from './cache.js'
import { APIResponseError, IGDBError } from './errorHandlers/errorClasses.js'
import { logAPIErrorResponse } from './errorHandlers/validateFunctions.js'
import fetchIGDBGames from './fetchIGDBGames.js'
import processGamesData from './processGamesData.js'
import setGamePrices from './setGamePrices.js'

export default async function fetchGames(req, res, next) {
  try {
    const gamesData = await fetchIGDBGames(req.dataFieldParameters)
    let games = processGamesData(gamesData, req.query.dataType)
    games = await setGamePrices(games)
    setCache(req, `gamesData-${req.query.dataType}`, games)
    res.json(games)
  } catch (error) {
    if (!(error instanceof IGDBError || error instanceof APIResponseError)) {
      logAPIErrorResponse(error)
    }
    next(error)
  }
}
