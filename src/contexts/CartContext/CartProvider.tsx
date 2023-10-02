import { useState } from 'react'
import { CartContext } from './CartContext'
import { CartItem, CartProviderProps } from 'types'
import { addToCart, clearCart, removeFromCart } from 'utils/shoppingCartHelpers'

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const enhancedAddToCart = (item: CartItem) => addToCart(cart, setCart, item)
  const enhancedRemoveFromCart = (itemId: string) =>
    removeFromCart(cart, setCart, itemId)
  const enhancedClearCart = () => clearCart(setCart)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: enhancedAddToCart,
        removeFromCart: enhancedRemoveFromCart,
        clearCart: enhancedClearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
