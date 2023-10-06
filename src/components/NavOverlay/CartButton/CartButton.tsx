import { Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { ResponsiveStyledBox } from './styles'

export function CartButton({
  cartLength,
  onClick
}: {
  cartLength: number
  onClick: () => void
}) {
  return (
    <ResponsiveStyledBox>
      <IconButton
        size="large"
        aria-label="show cart items"
        color="inherit"
        onClick={onClick}
      >
        <Badge badgeContent={cartLength} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </ResponsiveStyledBox>
  )
}
