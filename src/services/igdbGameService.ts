import { errorHandler, handleBackendErrors } from 'errorHandlers'
import { Game } from 'types/types'

export const getGames = async (dataType: string): Promise<Game[]> => {
  try {
    const response = await fetch(
      `http://localhost:3001/fetchGames?dataType=${dataType}`
    )

    await handleBackendErrors(response)

    const games: Game[] = await response.json()
    console.log('Recently Released:', games)

    return games
  } catch (error) {
    return errorHandler(error as Error)
  }
}
