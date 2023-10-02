import { CartItem } from 'types'

export const addToCart = (
  cart: CartItem[],
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>,
  item: CartItem
) => {
  const itemExists = cart.find((cartItem) => cartItem.id === item.id)

  if (itemExists) {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    )
  } else {
    setCart([...cart, { ...item, quantity: 1 }])
  }
}

export const removeFromCart = (
  cart: CartItem[],
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>,
  itemId: string
) => {
  setCart(cart.filter((item) => item.id !== itemId))
}

export const clearCart = (
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
) => {
  setCart([])
}
