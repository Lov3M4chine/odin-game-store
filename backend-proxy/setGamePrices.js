import { fetchGamePrices } from './fetchPrices.js'

async function setGamePrices(games) {
  const { plains, pricingData } = await fetchGamePrices(games)
  return games.map((game, index) => {
    const price = pricingData[plains[index]]
      ? pricingData[plains[index]].price
      : 39.99
    game.price = price === 0.0 ? 39.99 : price
    return game
  })
}

export default setGamePrices
