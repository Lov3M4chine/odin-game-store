import React, { useContext } from 'react'
import { Box, List } from '@mui/material'
import { ToggleableComponentProps } from 'types'
import { CartDrawer } from './styles'
import { CartContext } from 'contexts/CartContext'
import { CartHeader } from './CartHeader'
import { CartItemComponent } from './CartItemComponent'
import { CartFooter } from './CartFooter'

export const ShoppingCartDrawer: React.FC<ToggleableComponentProps> = ({
  open,
  onClose
}) => {
  const { cart, clearCart, removeFromCart } = useContext(CartContext)

  return (
    <CartDrawer anchor="right" open={open} onClose={onClose}>
      <Box role="presentation">
        <List sx={{ mt: 8 }}>
          <CartHeader length={cart.length} clearCart={clearCart} />
          {cart.map((item) => (
            <CartItemComponent
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              removeFromCart={removeFromCart}
            />
          ))}

          <CartFooter cart={cart} />
        </List>
      </Box>
    </CartDrawer>
  )
}
