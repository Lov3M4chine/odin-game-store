import { getGames } from 'services'
import { Game } from 'types'
import { NavigateFunction } from 'react-router-dom'

export const searchGames = async (
  query: string,
  dataType: string,
  setGames: (games: Game[]) => void,
  navigate: NavigateFunction
) => {
  if (!query.trim()) return

  const searchedGames = await getGames(dataType, query)
  setGames(searchedGames)

  // Navigate to the results page after setting the games
  navigate('/')
}
