import { getEnvVariable } from 'utils/envUtils'

// Fetches the access token from Twitch endpoint.
export const getAccessToken = async (): Promise<string> => {
  const TWITCH_TOKEN_ENDPOINT = 'https://id.twitch.tv/oauth2/token'
  const CLIENT_ID = getEnvVariable('REACT_APP_CLIENT_ID')
  const url = `${TWITCH_TOKEN_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${getEnvVariable(
    'REACT_APP_CLIENT_SECRET'
  )}&grant_type=client_credentials`

  const response = await fetch(url, { method: 'POST' })

  if (!response.ok) {
    throw new Error('Failed to obtain access token')
  }

  const { access_token } = await response.json()
  return access_token
}
