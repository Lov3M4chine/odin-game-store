import { Game } from 'types/types'

export const getGamesWithDetails = async (): Promise<Game[]> => {
  try {
    const response = await fetch('http://localhost:3001/fetchGames')
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} - ${response.statusText}`
      )
    }

    const games: Game[] = await response.json()
    console.log(games)
    return games
  } catch (error) {
    console.error('Error fetching games:', error)
    throw error
  }
}
