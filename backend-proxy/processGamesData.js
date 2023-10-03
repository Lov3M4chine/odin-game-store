import { processGameImages } from './helpers.js'

function processGamesData(games, dataType) {
  let processedGames = games.map((game) => processGameImages(game))

  if (dataType === 'recentlyReleased' || dataType === 'comingSoon') {
    processedGames = processedGames.filter(
      (game) => game.release_dates && game.release_dates.length === 1
    )
  }

  if (dataType === 'search') {
    const seenNames = new Set()
    processedGames = processedGames.filter((game) => {
      if (seenNames.has(game.name)) {
        return false
      } else {
        seenNames.add(game.name)
        return true
      }
    })
  }

  return processedGames
}

export default processGamesData
