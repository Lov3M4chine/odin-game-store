import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const TWITCH_TOKEN_ENDPOINT = 'https://id.twitch.tv/oauth2/token'

export async function getIGDBAccessToken() {
  const { IGDB_CLIENT_ID, IGDB_SECRET } = process.env
  if (!IGDB_CLIENT_ID || !IGDB_SECRET) {
    console.error(
      'Missing environment variables. Please ensure all required variables are set.'
    )
    process.exit(1)
  }

  const url = `${TWITCH_TOKEN_ENDPOINT}?client_id=${IGDB_CLIENT_ID}&client_secret=${IGDB_SECRET}&grant_type=client_credentials`
  const response = await axios.post(url)

  if (response.status < 200 || response.status >= 300) {
    throw new Error('Failed to obtain access token')
  }

  return response.data.access_token
}
