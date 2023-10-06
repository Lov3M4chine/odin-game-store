class IGDBError extends Error {
  constructor(message) {
    super(message)
    this.name = 'IGDBError'
  }
}

class APIResponseError extends Error {
  constructor(message, data) {
    super(message)
    this.name = 'APIResponseError'
    this.data = data
  }
}

class EnvironmentError extends Error {
  constructor(message) {
    super(message)
    this.name = 'EnvironmentError'
  }
}

class TokenFetchError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name = 'TokenFetchError'
    this.statusCode = statusCode
  }
}

module.exports = {
  IGDBError,
  APIResponseError,
  EnvironmentError,
  TokenFetchError
}
