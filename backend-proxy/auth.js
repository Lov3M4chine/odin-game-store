const axios = require('axios')
const {
  checkEnvironmentVariables,
  handleAxiosError,
  validateResponse
} = require('./errorHandlers/validateFunctions.js')

const TWITCH_TOKEN_ENDPOINT = 'https://id.twitch.tv/oauth2/token'

async function getIGDBAccessToken() {
  const { IGDB_CLIENT_ID, IGDB_SECRET } = process.env
  checkEnvironmentVariables(IGDB_CLIENT_ID, IGDB_SECRET)
  try {
    const url = `${TWITCH_TOKEN_ENDPOINT}?client_id=${IGDB_CLIENT_ID}&client_secret=${IGDB_SECRET}&grant_type=client_credentials`
    const response = await axios.post(url)
    validateResponse(response)
    return response.data.access_token
  } catch (error) {
    handleAxiosError(error)
  }
}

module.exports = {
  getIGDBAccessToken
}
