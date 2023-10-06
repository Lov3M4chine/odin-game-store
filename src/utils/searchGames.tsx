import { getGames } from 'services'
import { Game } from 'types'
import { NavigateFunction } from 'react-router-dom'

export const searchGames = async (
  query: string,
  dataType: string,
  setGames: (games: Game[]) => void,
  navigate: NavigateFunction,
  setIsLoading: (state: boolean) => void
) => {
  if (!query.trim()) return

  setIsLoading(true)

  const searchedGames = await getGames(dataType, query)

  setGames(searchedGames)
  setIsLoading(false)
  navigate('/')
}
