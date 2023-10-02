import React, { useContext } from 'react'
import {
  Box,
  List,
  Typography,
  Button,
  ListItem,
  ListItemText
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ToggleableComponentProps } from 'types'
import { CartDrawer, FooterDivider, HeaderDivider } from './styles'
import { CartContext } from 'contexts/CartContext'

export const ShoppingCartDrawer: React.FC<ToggleableComponentProps> = ({
  open,
  onClose
}) => {
  const cartContext = useContext(CartContext)
  if (!cartContext) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const { cart, clearCart } = useContext(CartContext)

  const list = () => (
    <Box role="presentation">
      <List sx={{ mt: 8 }}>
        <HeaderDivider role="presentation">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={3}
          >
            <Typography variant="h5" color="primary">
              {cart.length} Games
            </Typography>
            {/* Add clearCart onClick */}
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              color="secondary"
              size="small"
              onClick={clearCart}
            >
              Clear
            </Button>
          </Box>
        </HeaderDivider>
        {/* Dynamic cart items */}
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity}`}
            />
            {/* Add button or icon to remove the item if desired */}
          </ListItem>
        ))}
        {/* You can further refine the footer to reflect total cost, etc. */}
        <FooterDivider>
          <Typography variant="h5" color="primary" display="inline">
            Total:
          </Typography>
          <Typography variant="h5" display="inline">
            {/* Add logic to calculate total */} $
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </Typography>
        </FooterDivider>
      </List>
    </Box>
  )

  return (
    <CartDrawer anchor="right" open={open} onClose={onClose}>
      {list()}
    </CartDrawer>
  )
}
