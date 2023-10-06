const { setCache } = require('./cache.js')
const {
  APIResponseError,
  IGDBError
} = require('./errorHandlers/errorClasses.js')
const { logAPIErrorResponse } = require('./errorHandlers/validateFunctions.js')
const fetchIGDBGames = require('./fetchIGDBGames.js')
const processGamesData = require('./processGamesData.js')
const setGamePrices = require('./setGamePrices.js')

async function fetchGames(req, res, next) {
  console.log('fetchGames endpoint hit')
  console.log('Entering fetchGames function')
  try {
    const gamesData = await fetchIGDBGames(req.dataFieldParameters)
    console.log('Fetched IGDB games')
    let games = processGamesData(gamesData, req.query.dataType)
    games = await setGamePrices(games)
    console.log('Processed games and set prices')
    setCache(req, `gamesData-${req.query.dataType}`, games)
    console.log('Set games in cache')
    res.json(games)
  } catch (error) {
    console.log('Error caught in fetchGames')
    if (!(error instanceof IGDBError || error instanceof APIResponseError)) {
      logAPIErrorResponse(error)
    }
    next(error)
  }
}

module.exports = fetchGames
