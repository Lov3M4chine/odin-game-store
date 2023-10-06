import { CartItemProps } from 'types'

export const addToCart = (
  cart: CartItemProps[],
  setCart: React.Dispatch<React.SetStateAction<CartItemProps[]>>,
  item: CartItemProps
) => {
  const itemExists = cart.find((cartItem) => cartItem.id === item.id)

  setCart((prevCart) => {
    let updatedCart

    if (itemExists) {
      updatedCart = prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    } else {
      updatedCart = [...prevCart, { ...item, quantity: 1 }]
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart))
    return updatedCart
  })
}

export const removeFromCart = (
  cart: CartItemProps[],
  setCart: React.Dispatch<React.SetStateAction<CartItemProps[]>>,
  itemId: string
) => {
  setCart((prevCart) => {
    const updatedCart = prevCart.filter((item) => item.id !== itemId)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    return updatedCart
  })
}

export const clearCart = (
  setCart: React.Dispatch<React.SetStateAction<CartItemProps[]>>
) => {
  setCart([])
  localStorage.removeItem('cart')
}
