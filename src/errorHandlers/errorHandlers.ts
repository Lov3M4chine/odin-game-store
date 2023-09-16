import { Game } from 'types'
import {
  AppError,
  ClientError,
  NetworkError,
  ServerError,
  UnauthorizedError
} from './errorClasses'

export function logAndThrowError(error: Error, message: string): never {
  console.error(message, error)
  throw error
}

export async function handleBackendErrors(response: Response): Promise<void> {
  if (!response.ok) {
    const errorData = await response.json()
    const errorType = errorData.errorType || 'UnknownError'
    const errorMessage = errorData.errorMessage || 'An unknown error occurred'

    switch (errorType) {
      case 'ValidationError':
        throw new ClientError(errorMessage)
      case 'UnauthorizedError':
        throw new UnauthorizedError(errorMessage)
      case 'SequelizeDatabaseError':
      case 'UnsupportedDataTypeError':
        throw new ClientError(errorMessage)
      case 'NotFoundError':
        throw new ClientError(errorMessage)
      case 'RateLimitExceeded':
        throw new ClientError(errorMessage)
      case 'ServiceUnavailable':
        throw new ServerError(errorMessage)
      default:
        throw new AppError(errorMessage)
    }
  }
}

export function errorHandler(error: Error): Game[] {
  console.error(error)

  if (error instanceof ClientError) {
    alert('There was an error with your request. Please check and try again.')
  } else if (error instanceof UnauthorizedError) {
    alert(
      'You are not authorized to perform this action. Please login or check your permissions.'
    )
  } else if (error instanceof ServerError) {
    alert("Sorry, there's an issue on our end. We're working to fix it!")
  } else if (error instanceof NetworkError) {
    alert('Network error. Please check your internet connection and try again.')
  } else {
    alert('An unexpected error occurred. Please try again later.')
  }
  return []
}
