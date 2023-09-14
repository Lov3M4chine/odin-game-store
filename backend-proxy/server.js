import express from 'express'
import cors from 'cors'
import { checkCache, getCache } from './cache.js'
import fetchGames from './fetchGames.js'
import asyncHandler from './errorHandlers/utils.js'
import handleErrors from './errorHandlers/handleErrors.js'

const app = express()
const PORT = 3001

console.log('Server initializing...')

app.use(cors())

app.use('/fetchGames', (req, res, next) =>
  checkCache(req, res, next, 'gamesData')
)

app.get('/fetchGames', getCache)

app.get('/fetchGames', asyncHandler(fetchGames))

app.use(handleErrors)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
