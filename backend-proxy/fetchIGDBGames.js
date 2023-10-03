import axios from 'axios'
import { getIGDBAccessToken } from './auth.js'
import { validateIGDBResponse } from './errorHandlers/validateFunctions.js'

async function fetchIGDBGames(data) {
  const accessToken = await getIGDBAccessToken()
  const response = await axios({
    method: 'post',
    url: 'https://api.igdb.com/v4/games',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.IGDB_CLIENT_ID,
      Authorization: `Bearer ${accessToken}`
    },
    data: data
  })

  validateIGDBResponse(response)
  return response.data
}

export default fetchIGDBGames
