import {
  APIResponseError,
  EnvironmentError,
  IGDBError,
  TokenFetchError
} from './errorClasses.js'

export function validateIGDBResponse(response) {
  if (!Array.isArray(response.data)) {
    throw new IGDBError('Unexpected response from IGDB.')
  }
}

export function logAPIErrorResponse(error) {
  console.error(
    'Error fetching data from IGDB:',
    error.response ? error.response.data : error
  )
  throw new APIResponseError(
    'Error fetching from IGDB.',
    error.response ? error.response.data : error
  )
}

export function checkEnvironmentVariables(IGDB_CLIENT_ID, IGDB_SECRET) {
  if (!IGDB_CLIENT_ID || !IGDB_SECRET) {
    throw new EnvironmentError(
      'Missing environment variables. Please ensure all required variables are set.'
    )
  }
}

export function validateResponse(response) {
  if (response.status < 200 || response.status >= 300) {
    throw new TokenFetchError(
      'Failed to obtain access token from IGDB.',
      response.status
    )
  }
}

export function handleAxiosError(error) {
  if (error.response && error.response.status) {
    throw new TokenFetchError(
      `Failed to obtain access token with status: ${error.response.status}`,
      error.response.status
    )
  }
  throw error // Re-throw the generic error
}
