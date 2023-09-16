import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ShoppingCartDrawer from './ShoppingCartDrawer/ShoppingCartDrawer'
import { NavDrawer } from './NavDrawer/NavDrawer'
import { useDrawer } from 'hooks/useDrawer'
import {
  Search,
  SearchIconWrapper,
  StyledAppBar,
  StyledBox,
  StyledIconButton,
  StyledInputBase,
  StyledTypography
} from './styles'
import { Logo } from 'components/Icons'

export function NavOverlay() {
  const { drawerStates, toggleDrawer } = useDrawer()

  return (
    <Box flexGrow={1}>
      <StyledAppBar>
        <Toolbar>
          <StyledIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="toggle drawer"
            onClick={() => toggleDrawer('navDrawerOpen')}
          >
            <MenuIcon />
          </StyledIconButton>
          <StyledTypography variant="h6" noWrap>
            Galactic Games
          </StyledTypography>
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
          <Box flexGrow={1} />
          <StyledBox>
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
          </StyledBox>
        </Toolbar>
      </StyledAppBar>
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
