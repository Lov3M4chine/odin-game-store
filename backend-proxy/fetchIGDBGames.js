const axios = require('axios')
const { getIGDBAccessToken } = require('./auth.js')
const { validateIGDBResponse } = require('./errorHandlers/validateFunctions.js')

async function fetchIGDBGames(data, retries = 3) {
  try {
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
  } catch (error) {
    if (error.response && error.response.status === 503 && retries > 0) {
      console.log(`Retrying fetchIGDBGames... attempts left: ${retries - 1}`)
      await new Promise((res) => setTimeout(res, 500))
      return fetchIGDBGames(data, retries - 1)
    } else {
      throw error
    }
  }
}

module.exports = fetchIGDBGames
