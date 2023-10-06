import { Game, GameDataRowProps } from 'types'

export const processGameData = (game: Game) => {
  const screenshots = game.screenshots
    ? game.screenshots.map((screenshot) => 'https:' + screenshot.url)
    : []

  const platforms = game.platforms
    ? game.platforms.map((platform) => platform.name).join(', ')
    : 'N/A'
  const genres = game.genres
    ? game.genres.map((genre) => genre.name).join(', ')
    : 'N/A'
  const gameModes = game.game_modes
    ? game.game_modes.map((mode) => mode.name).join(', ')
    : 'N/A'
  const companies = game.involved_companies
    ? game.involved_companies.map((item) => item.company.name).join(', ')
    : 'N/A'
  const gameEngineName = game.game_engines
    ? game.game_engines.map((engine) => engine.name).join(', ')
    : 'N/A'
  const dataRows: GameDataRowProps[] = []

  if (platforms !== 'N/A') {
    dataRows.push({ label: 'Platforms', value: platforms })
  }

  if (game.aggregated_rating) {
    dataRows.push({
      label: 'Community Rating',
      value: game.aggregated_rating.toFixed(2)
    })
  }

  if (genres !== 'N/A') {
    dataRows.push({ label: 'Genres', value: genres })
  }

  if (game.release_dates?.[0]?.human) {
    dataRows.push({ label: 'Release Date', value: game.release_dates[0].human })
  }

  if (gameEngineName !== 'N/A') {
    dataRows.push({ label: 'Game Engine', value: gameEngineName })
  }

  if (gameModes !== 'N/A') {
    dataRows.push({ label: 'Game Modes', value: gameModes })
  }

  if (companies !== 'N/A') {
    dataRows.push({ label: 'Companies', value: companies })
  }

  return {
    screenshots,
    platforms,
    genres,
    gameModes,
    companies,
    gameEngineName,
    dataRows,
    summary: game.summary,
    storyline: game.storyline
  }
}
