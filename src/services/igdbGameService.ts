import { errorHandler, handleBackendErrors } from 'errorHandlers'
import { Game } from 'types'

export const getGames = async (
  dataType: string,
  query?: string
): Promise<Game[]> => {
  // Check for search dataType with no query and return early.
  if (dataType === 'search' && !query) {
    return []
  }

  try {
    console.log(
      `getGames is initializing fetch. dataType is ${dataType} Query is ${query}`
    )
    const response = await fetch(
      `http://localhost:3001/fetchGames?dataType=${dataType}${
        query ? `&query=${encodeURIComponent(query)}` : ''
      }`
    )

    await handleBackendErrors(response)

    const games: Game[] = await response.json()
    console.log(dataType, ':', games)

    return games
  } catch (error) {
    return errorHandler(error as Error)
  }
}
