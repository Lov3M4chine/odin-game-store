import { errorHandler, handleBackendErrors } from 'errorHandlers'
import { Game } from 'types'

export const getGames = async (
  dataType: string,
  query?: string
): Promise<Game[]> => {
  if (dataType === 'search' && !query) {
    return []
  }

  try {
    const response = await fetch(
      `http://localhost:3001/fetchGames?dataType=${dataType}${
        query ? `&query=${encodeURIComponent(query)}` : ''
      }`
    )

    await handleBackendErrors(response)

    const games: Game[] = await response.json()

    return games
  } catch (error) {
    return errorHandler(error as Error)
  }
}
