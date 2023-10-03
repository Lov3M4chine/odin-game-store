import React, { useContext } from 'react'
import {
  Box,
  List,
  Typography,
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ToggleableComponentProps } from 'types'
import { CartDrawer, FooterDivider, HeaderDivider } from './styles'
import { CartContext } from 'contexts/CartContext'

export const ShoppingCartDrawer: React.FC<ToggleableComponentProps> = ({
  open,
  onClose
}) => {
  const { cart, clearCart } = useContext(CartContext)
  const { removeFromCart } = useContext(CartContext)

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
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${
                item.quantity
              } | Price: $${item.price.toFixed(2)}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeFromCart(item.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        <FooterDivider>
          <Typography variant="h5" color="primary" display="inline">
            Total:
          </Typography>
          <Box ml={1} component="span">
            <Typography variant="h5" display="inline">
              $
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </Typography>
          </Box>
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
