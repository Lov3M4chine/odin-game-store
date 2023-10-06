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
    const BASE_URL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8888/.netlify/functions/api' // added "/api" here
        : '/.netlify/functions/api' // added "/api" here

    console.log(BASE_URL)
    const response = await fetch(
      `${BASE_URL}/fetchGames?dataType=${dataType}${
        query ? `&query=${encodeURIComponent(query)}` : ''
      }`
    )

    await handleBackendErrors(response)

    // Log the raw response before attempting to parse it as JSON
    const text = await response.text()
    console.log('Raw Response:', text)

    // Then, parse the logged response (text) into JSON
    const games: Game[] = JSON.parse(text)

    return games
  } catch (error) {
    return errorHandler(error as Error)
  }
}
