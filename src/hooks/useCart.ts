import { CartContext } from 'contexts/CartContext/CartContext'
import { useContext } from 'react'
import { CartItem, Game } from 'types'

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const { addToCart } = context

  const addGameToCart = (game: Game) => {
    const cartItem: CartItem = {
      ...game,
      id: game.id.toString(),
      quantity: 1,
      price: game.price || 39.99
    }
    addToCart(cartItem)
  }

  return {
    ...context,
    addGameToCart
  }
}
