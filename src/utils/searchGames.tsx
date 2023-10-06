import { getGames } from 'services'
import { Game } from 'types'
import { NavigateFunction } from 'react-router-dom'

export const searchGames = async (
  query: string,
  dataType: string,
  setGames: (games: Game[]) => void,
  navigate: NavigateFunction,
  setIsLoading: (state: boolean) => void // Add this
) => {
  if (!query.trim()) return

  setIsLoading(true) // Set loading to true when initiating the search

  const searchedGames = await getGames(dataType, query)
  setGames(searchedGames)

  setIsLoading(false) // Set loading to false once search is completed

  // Navigate to the results page after setting the games
  navigate('/')
}
