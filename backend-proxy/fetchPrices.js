const axios = require('axios')

const CHUNK_SIZE = 100

function chunkArray(arr, chunkSize) {
  const chunks = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize))
  }
  return chunks
}

async function fetchGamePrices(games) {
  const fetchPlainForTitle = async (title) => {
    try {
      const response = await axios.get(
        `https://api.isthereanydeal.com/v02/game/plain/?key=${
          process.env.ISTHEREANYDEAL_API_KEY
        }&title=${encodeURIComponent(title)}`
      )
      return response.data.data.plain
    } catch (error) {
      console.error(`Error fetching plain for title ${title}:`, error)
      throw error
    }
  }

  console.log('Fetching plains for games')
  const plainsPromises = games.map((game) => fetchPlainForTitle(game.name))
  let plains = []
  try {
    plains = await Promise.all(plainsPromises)
  } catch (error) {
    console.error('Error fetching plains for games:', error)
    throw error
  }
  console.log('Plains fetched:', plains)

  const plainsChunks = chunkArray(plains, CHUNK_SIZE)
  let pricingData = {}

  try {
    const pricingPromises = plainsChunks.map((chunk) =>
      axios.get(
        `https://api.isthereanydeal.com/v01/game/lowest/?key=${
          process.env.ISTHEREANYDEAL_API_KEY
        }&plains=${chunk.join(',')}`
      )
    )
    console.log('Fetching pricing data for plains')
    const pricingResponses = await Promise.all(pricingPromises)
    console.log('Pricing data fetched:', pricingResponses)

    for (const response of pricingResponses) {
      Object.assign(pricingData, response.data.data)
    }
  } catch (error) {
    console.error('Error fetching pricing data for plains:', error)
    throw error
  }

  return { plains, pricingData }
}

module.exports = fetchGamePrices
