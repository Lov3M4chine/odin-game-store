import { errorHandler, handleBackendErrors } from 'errorHandlers'
import { Game } from 'types/types'

export const getRecentlyReleasedGames = async (): Promise<Game[]> => {
  try {
    const dataType = 'recentlyReleased'
    const response = await fetch(
      `http://localhost:3001/fetchGames?dataType=${dataType}`
    )

    await handleBackendErrors(response)

    const games: Game[] = await response.json()
    console.log(games)
    return games
  } catch (error) {
    return errorHandler(error as Error)
  }
}
