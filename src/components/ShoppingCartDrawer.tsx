import React from 'react'
import {
  Box,
  List,
  Divider,
  Typography,
  Button,
  ListItem,
  ListItemText,
  Drawer
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface Props {
  open: boolean
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void
}

const ShoppingCartDrawer: React.FC<Props> = ({ open, onClose }) => {
  const list = () => (
    <Box role="presentation">
      <List sx={{ mt: 8 }}>
        <Divider component="div" role="presentation">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 2 }}
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
        </Divider>
        {/* Replace with map over cart items */}
        <ListItem>
          <ListItemText primary={'Item 1'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={'Item 2'} />
        </ListItem>
        {/* ... */}
        <Divider sx={{ position: 'fixed', bottom: 0, margin: 2 }}>
          <Typography variant="h5" color="primary" display="inline">
            Total:
          </Typography>
          <Typography variant="h5" display="inline">
            {' '}
            $50
          </Typography>
        </Divider>
      </List>
    </Box>
  )

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ width: 240, '& .MuiDrawer-paper': { width: 240 } }}
    >
      {list()}
    </Drawer>
  )
}

export default ShoppingCartDrawer
