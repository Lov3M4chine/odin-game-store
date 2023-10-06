import { Box, Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { HeaderDivider } from './styles'

export const CartHeader: React.FC<{
  length: number
  clearCart: () => void
}> = ({ length, clearCart }) => (
  <HeaderDivider role="presentation">
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={3}
    >
      <Typography variant="h5" color="primary">
        {length} Games
      </Typography>
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
)
