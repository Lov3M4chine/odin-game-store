import { useState } from 'react'
import { CartContext } from './CartContext'
import { CartItemProps, CartProviderProps } from 'types'
import { addToCart, clearCart, removeFromCart } from 'utils/shoppingCartHelpers'

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem('cart') || '[]')
  const [cart, setCart] = useState(initialCart)

  const enhancedAddToCart = (item: CartItemProps) =>
    addToCart(cart, setCart, item)
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
