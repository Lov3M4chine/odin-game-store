const axios = require('axios')
const { getIGDBAccessToken } = require('./auth.js')
const { validateIGDBResponse } = require('./errorHandlers/validateFunctions.js')

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

  // Log the headers from the IGDB API response
  console.log('IGDB API Headers:', response.headers)

  console.log('IGDB response received:', response.data)
  validateIGDBResponse(response)
  console.log('IGDB response validated successfully')
  return response.data
}

module.exports = fetchIGDBGames
