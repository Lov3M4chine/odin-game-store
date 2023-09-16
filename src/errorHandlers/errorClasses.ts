// Generic application error
export class AppError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AppError'
  }
}

// Error when data type or other client request issues are identified
export class ClientError extends AppError {
  constructor(message: string) {
    super(message)
    this.name = 'ClientError'
  }
}

// For network related issues
export class NetworkError extends AppError {
  constructor(message: string) {
    super(message)
    this.name = 'NetworkError'
  }
}

// When server returns a 5xx status code or specific error messages
export class ServerError extends AppError {
  constructor(message: string) {
    super(message)
    this.name = 'ServerError'
  }
}

// For unauthorized accesses
export class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message)
    this.name = 'UnauthorizedError'
  }
}

// Any other specific error types you'd like to handle...
