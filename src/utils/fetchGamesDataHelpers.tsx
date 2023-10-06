import { getGames } from 'services'
import { Game } from 'types'

export const fetchGamesData = async (type: string): Promise<Game[]> => {
  try {
    return await getGames(type)
  } catch (error) {
    console.error('Failed fetching game data', error)
    throw error
  }
}
