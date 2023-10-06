const express = require('express')
const ServerlessHttp = require('serverless-http')
const cors = require('cors')
const { checkCache, getCache } = require('../../backend-proxy/cache.js')
const fetchGames = require('../../backend-proxy/fetchGames.js')
const asyncHandler = require('../../backend-proxy/errorHandlers/utils.js')
const handleErrors = require('../../backend-proxy/errorHandlers/handleErrors.js')
const { setDataFieldParameters } = require('../../backend-proxy/helpers.js')
require('dotenv').config({ path: '../../backend-proxy/.env' })

const app = express()

const corsOptions = {
  origin: '*', // For development; replace with your frontend's origin for production.
  methods: ['GET', 'POST'], // Add other HTTP methods if needed.
  allowedHeaders: ['Content-Type']
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
  console.log('Hit Express route:', req.path)
  next()
})

// Middleware to check if data exists in the cache
app.use('/.netlify/functions/api/fetchGames', (req, res, next) =>
  checkCache(req, res, next, 'gamesData')
)

// Middleware to send cached data if it exists
app.use('/.netlify/functions/api/fetchGames', getCache)

// Middlewares to set up parameters only if we're going to fetch from the API
app.use('/.netlify/functions/api/fetchGames', setDataFieldParameters)

// Handler for the fetching logic
app.get('/.netlify/functions/api/fetchGames', asyncHandler(fetchGames))

// Global error handler
app.use(handleErrors)

export const handler = ServerlessHttp(app)
