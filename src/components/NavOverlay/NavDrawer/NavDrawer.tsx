import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import { Typography } from '@mui/material'
import { NavDrawerToggleProps } from 'types'
import { genreMenuItems, platformMenuItems, topMenuItems } from './MenuItems'
import { CustomListItem } from './CustomListItem'

const drawerWidth = 240

export const NavDrawer: React.FC<NavDrawerToggleProps> = ({
  open,
  onClose
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        open={open}
        onClose={onClose}
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Divider component="div" role="presentation">
            <Typography variant="h5" color="primary" sx={{ mt: 2 }}>
              Top
            </Typography>
          </Divider>
          <List>
            {topMenuItems.map((item) => (
              <CustomListItem key={item.text} {...item} />
            ))}
          </List>
          <Divider component="div" role="presentation">
            <Typography variant="h5" color="primary">
              Platform
            </Typography>
          </Divider>
          <List>
            {platformMenuItems.map((item) => (
              <CustomListItem key={item.text} {...item} />
            ))}
          </List>
          <Divider component="div" role="presentation">
            <Typography variant="h5" color="primary">
              Genre
            </Typography>
          </Divider>
          <List>
            {genreMenuItems.map((item) => (
              <CustomListItem key={item.text} {...item} />
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
