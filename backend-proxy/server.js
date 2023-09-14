import express from 'express'
import cors from 'cors'
import { checkCache, getCache } from './cache.js'
import fetchGames from './fetchGames.js'
import { asyncHandler, handleErrors } from './errorHandlers.js'

const app = express()
const PORT = 3001

console.log('Server initializing...')

app.use(cors())

app.use('/fetchGames', (req, res, next) =>
  checkCache(req, res, next, 'gamesData')
)

app.get('/fetchGames', getCache)

app.get('/fetchGames', asyncHandler(fetchGames))

app.use((error, req, res, _next) => {
  console.error(error.stack)

  // You can use switch or if-else statements based on error name or custom properties to send appropriate HTTP codes.
  if (error.name === 'SomeSpecificError') {
    return res.status(400).send(`Bad Request: ${error.message}`)
  }

  return res.status(500).send(`An error occurred: ${error.message}`)
})

app.use(handleErrors)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
