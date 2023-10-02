import { getGames } from 'services'
import { Game } from 'types'

export const searchGames = async (
  query: string,
  dataType: string,
  setGames: (games: Game[]) => void
) => {
  if (!query.trim()) return

  const searchedGames = await getGames(dataType, query)

  setGames(searchedGames)
}
