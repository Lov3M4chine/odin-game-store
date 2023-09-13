import { Game } from 'types/types'
import { getAccessToken } from './auth'
import { getEnvVariable } from 'utils/envUtils'

// Fetches game details from IGDB.
export const fetchGames = async (): Promise<Game[]> => {
  const IGDB_API_ENDPOINT = 'https://api.igdb.com/v4/games'
  const CLIENT_ID = getEnvVariable('REACT_APP_CLIENT_ID')
  const accessToken = await getAccessToken()

  const response = await fetch(IGDB_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Client-ID': CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: 'cover,genre,platforms,screenshots,summary'
    })
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}
