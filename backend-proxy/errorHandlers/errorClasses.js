export class IGDBError extends Error {
  constructor(message) {
    super(message)
    this.name = 'IGDBError'
  }
}

export class APIResponseError extends Error {
  constructor(message, data) {
    super(message)
    this.name = 'APIResponseError'
    this.data = data
  }
}

export class EnvironmentError extends Error {
  constructor(message) {
    super(message)
    this.name = 'EnvironmentError'
  }
}

export class TokenFetchError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name = 'TokenFetchError'
    this.statusCode = statusCode
  }
}
