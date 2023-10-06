import { CartItemProps } from 'types'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { FooterDivider } from './styles'

export const CartFooter: React.FC<{ cart: CartItemProps[] }> = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <FooterDivider>
      <Typography variant="h5" color="primary" display="inline">
        Total:
      </Typography>
      <Box ml={1} component="span">
        <Typography variant="h5" display="inline">
          ${total.toFixed(2)}
        </Typography>
      </Box>
    </FooterDivider>
  )
}
