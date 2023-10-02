import express from 'express'
import cors from 'cors'
import { checkCache, getCache } from './cache.js'
import fetchGames from './fetchGames.js'
import asyncHandler from './errorHandlers/utils.js'
import handleErrors from './errorHandlers/handleErrors.js'
import { setDataFieldParameters } from './helpers.js'

const app = express()
const PORT = 3001

app.use(cors())

// Middleware to check if data exists in the cache
app.use('/fetchGames', (req, res, next) =>
  checkCache(req, res, next, 'gamesData')
)

// Middleware to send cached data if it exists
app.use('/fetchGames', getCache)

// Middlewares to set up parameters only if we're going to fetch from the API
app.use('/fetchGames', setDataFieldParameters)

// Handler for the fetching logic
app.get('/fetchGames', asyncHandler(fetchGames))

// Global error handler
app.use(handleErrors)

app.listen(PORT, () => {})
