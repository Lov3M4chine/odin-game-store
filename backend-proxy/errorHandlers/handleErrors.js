function handleErrors(error, req, res, _next) {
  console.log(`Handling error of type: ${error.name}`)

  const sendErrorResponse = (status, errorType, errorMessage) => {
    return res.status(status).json({
      errorType: errorType,
      errorMessage: errorMessage
    })
  }

  // You might encounter this error if there's a wrong syntax in your SQL queries.
  if (error.name === 'SequelizeDatabaseError') {
    return sendErrorResponse(
      400,
      'DatabaseError',
      `Database error: ${error.message}`
    )
  }

  // Validation errors (e.g., using some ORM or input validation library)
  if (error.name === 'ValidationError') {
    return sendErrorResponse(
      400,
      'ValidationError',
      `Validation error: ${error.message}`
    )
  }

  // Authorization errors (e.g., using JWT or other auth mechanisms)
  if (error.name === 'UnauthorizedError') {
    return sendErrorResponse(
      401,
      'UnauthorizedError',
      `Unauthorized: ${error.message}`
    )
  }

  // Not found errors (e.g., querying a non-existent record)
  if (error.name === 'NotFoundError') {
    return sendErrorResponse(
      404,
      'NotFoundError',
      `Resource not found: ${error.message}`
    )
  }

  // Rate limit exceeded (e.g., if using some rate-limiting middleware)
  if (error.name === 'RateLimitExceeded') {
    return sendErrorResponse(
      429,
      'RateLimitExceeded',
      `Too many requests: ${error.message}`
    )
  }

  // If you're using third-party services or APIs, they might sometimes be unavailable.
  if (error.name === 'ServiceUnavailable') {
    return sendErrorResponse(
      503,
      'ServiceUnavailable',
      `Service unavailable: ${error.message}`
    )
  }

  if (error.name === 'UnsupportedDataTypeError') {
    return sendErrorResponse(
      400,
      'UnsupportedDataTypeError',
      `Unsupported data type: ${error.message}`
    )
  }

  // Catch-all for other errors
  return sendErrorResponse(
    500,
    'GeneralError',
    `An error occurred: ${error.message}`
  )
}

module.exports = handleErrors
