import React from 'react'
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

export const ShoppingCartDrawer: React.FC<ToggleableComponentProps> = ({
  open,
  onClose
}) => {
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
              0 Games
            </Typography>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              color="secondary"
              size="small"
            >
              Clear
            </Button>
          </Box>
        </HeaderDivider>
        {/* Replace with map over cart items */}
        <ListItem>
          <ListItemText primary={'Item 1'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={'Item 2'} />
        </ListItem>
        {/* ... */}
        <FooterDivider>
          <Typography variant="h5" color="primary" display="inline">
            Total:
          </Typography>
          <Typography variant="h5" display="inline">
            {' '}
            $50
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
