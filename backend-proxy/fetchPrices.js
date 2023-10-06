const axios = require('axios')

const CHUNK_SIZE = 50

function chunkArray(arr, chunkSize) {
  const chunks = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize))
  }
  return chunks
}

async function fetchGamePrices(games) {
  const fetchPlainForTitle = async (title) => {
    const response = await axios.get(
      `https://api.isthereanydeal.com/v02/game/plain/?key=${
        process.env.ISTHEREANYDEAL_API_KEY
      }&title=${encodeURIComponent(title)}`
    )
    return response.data.data.plain
  }
  console.log('Fetching plains for games')
  const plainsPromises = games.map((game) => fetchPlainForTitle(game.name))
  const plains = await Promise.all(plainsPromises)
  console.log('Plains fetched:', plains)

  const plainsChunks = chunkArray(plains, CHUNK_SIZE)
  let pricingData = {}

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

  return { plains, pricingData }
}

module.exports = fetchGamePrices
