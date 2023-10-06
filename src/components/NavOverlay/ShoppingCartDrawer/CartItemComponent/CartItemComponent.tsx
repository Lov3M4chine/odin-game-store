import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@mui/material'
import { CartItemProps } from 'types'
import DeleteIcon from '@mui/icons-material/Delete'

export const CartItemComponent: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  removeFromCart
}) => (
  <ListItem>
    <ListItemText
      primary={name}
      secondary={`Quantity: ${quantity} | Price: $${price.toFixed(2)}`}
    />
    <ListItemSecondaryAction>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => removeFromCart(id)}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)
