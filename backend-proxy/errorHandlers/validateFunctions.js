const {
  APIResponseError,
  EnvironmentError,
  IGDBError,
  TokenFetchError
} = require('./errorClasses.js')

function logError(error) {
  console.error('Error:', error.message)
  if (error.data) {
    console.error('Error Data:', error.data)
  }
}

function validateIGDBResponse(response) {
  if (!Array.isArray(response.data)) {
    throw new IGDBError('Unexpected response from IGDB.')
  }
}

function createAPIErrorResponse(error) {
  logError(error) // Log the error
  return new APIResponseError(
    'Error fetching from IGDB.',
    error.response ? error.response.data : error
  )
}

function checkEnvironmentVariables(IGDB_CLIENT_ID, IGDB_SECRET) {
  if (!IGDB_CLIENT_ID || !IGDB_SECRET) {
    throw new EnvironmentError(
      'Missing environment variables. Please ensure all required variables are set.'
    )
  }
}

function validateResponse(response) {
  if (response.status < 200 || response.status >= 300) {
    throw new TokenFetchError(
      'Failed to obtain access token from IGDB.',
      response.status
    )
  }
}

function handleAxiosError(error) {
  if (error.response && error.response.status) {
    throw new TokenFetchError(
      `Failed to obtain access token with status: ${error.response.status}`,
      error.response.status
    )
  }
  throw error // Re-throw the generic error
}

module.exports = {
  validateIGDBResponse,
  createAPIErrorResponse,
  checkEnvironmentVariables,
  validateResponse,
  handleAxiosError
}
