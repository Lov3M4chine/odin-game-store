import { Game, GameDataRow } from 'types'

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
  const dataRows: GameDataRow[] = []
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
