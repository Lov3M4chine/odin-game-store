// Utility to handle async errors
export function asyncHandler(fn) {
  return function (req, res, next) {
    return Promise.resolve(fn(req, res, next)).catch(next)
  }
}

export function handleErrors(error, req, res, _next) {
  console.error(error.stack)

  // You might encounter this error if there's a wrong syntax in your SQL queries.
  if (error.name === 'SequelizeDatabaseError') {
    return res.status(400).send(`Database error: ${error.message}`)
  }

  // Validation errors (e.g., using some ORM or input validation library)
  if (error.name === 'ValidationError') {
    return res.status(400).send(`Validation error: ${error.message}`)
  }

  // Authorization errors (e.g., using JWT or other auth mechanisms)
  if (error.name === 'UnauthorizedError') {
    return res.status(401).send(`Unauthorized: ${error.message}`)
  }

  // Not found errors (e.g., querying a non-existent record)
  if (error.name === 'NotFoundError') {
    return res.status(404).send(`Resource not found: ${error.message}`)
  }

  // Rate limit exceeded (e.g., if using some rate-limiting middleware)
  if (error.name === 'RateLimitExceeded') {
    return res.status(429).send(`Too many requests: ${error.message}`)
  }

  // If you're using third-party services or APIs, they might sometimes be unavailable.
  if (error.name === 'ServiceUnavailable') {
    return res.status(503).send(`Service unavailable: ${error.message}`)
  }

  // Catch-all for other errors
  return res.status(500).send(`An error occurred: ${error.message}`)
}
