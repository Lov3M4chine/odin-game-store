import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Logo from './Logo'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from 'styling/NavBarStyles'
import ShoppingCartDrawer from './ShoppingCartDrawer'
import { NavDrawer } from './NavDrawer'
import { useDrawer } from 'hooks/useDrawer'

export default function NavOverlay() {
  const { drawerStates, toggleDrawer } = useDrawer()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="toggle drawer"
            sx={{ mr: 24 }}
            onClick={() => toggleDrawer('navDrawerOpen')}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Galactic Games
          </Typography>
          <Logo />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
              onClick={() => toggleDrawer('cartDrawerOpen')}
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <ShoppingCartDrawer
        open={drawerStates.cartDrawerOpen}
        onClose={() => toggleDrawer('cartDrawerOpen')}
      />
      <NavDrawer
        open={drawerStates.navDrawerOpen}
        onClose={() => toggleDrawer('navDrawerOpen')}
      />
    </Box>
  )
}
