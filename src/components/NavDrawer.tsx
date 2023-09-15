import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import HourglassTopIcon from '@mui/icons-material/HourglassTop'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import HikingIcon from '@mui/icons-material/Hiking'
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity'
import ExtensionIcon from '@mui/icons-material/Extension'
import { Typography } from '@mui/material'
import XboxIcon from './Icons/XboxIcon'
import PlaystationIcon from './Icons/PlaystationIcon'
import PCIcon from './Icons/PCIcon'
import SwitchIcon from './Icons/SwitchIcon'
import RPGIcon from './Icons/RPGIcon'
import StrategyIcon from './Icons/StrategyIcon'
import ShooterIcon from './Icons/ShooterIcon'
import {
  DrawerProviderProps,
  DrawerStates,
  DrawerToggleCallback,
  NavDrawerListItemProps,
  NavDrawerToggleProps
} from 'types/types'
import { DrawerContext, useDataType } from 'contexts/contexts'

const drawerWidth = 240

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [drawerStates, setDrawerStates] = React.useState<DrawerStates>({
    navDrawerOpen: true,
    cartDrawerOpen: false
  })

  const toggleDrawer: DrawerToggleCallback = (drawer) => {
    setDrawerStates((prev) => ({ ...prev, [drawer]: !prev[drawer] }))
  }

  return (
    <DrawerContext.Provider value={{ drawerStates, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const topMenuItems = [
  { icon: <HourglassTopIcon />, text: 'Coming Soon', type: 'comingSoon' },
  {
    icon: <MoreTimeIcon />,
    text: 'Recently Released',
    type: 'recentlyReleased'
  },
  { icon: <WhatshotIcon />, text: 'Top 100', type: 'top100' }
]

export const platformMenuItems = [
  { icon: <XboxIcon />, text: 'Xbox' },
  { icon: <PlaystationIcon />, text: 'Playstation' },
  { icon: <PCIcon />, text: 'PC' },
  { icon: <SwitchIcon />, text: 'Switch' }
]

export const genreMenuItems = [
  { icon: <HikingIcon />, text: 'Adventure' },
  { icon: <ReduceCapacityIcon />, text: 'Indie' },
  { icon: <RPGIcon />, text: 'Role-playing (RPG)' },
  { icon: <StrategyIcon />, text: 'Strategy' },
  { icon: <ExtensionIcon />, text: 'Puzzle' },
  { icon: <ShooterIcon />, text: 'Shooter' }
]

function CustomListItem({ icon, text, type }: NavDrawerListItemProps) {
  const { setDataType } = useDataType()

  const handleClick = () => {
    if (type) {
      setDataType(type)
    }
  }

  return (
    <ListItem disablePadding onClick={handleClick}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

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
