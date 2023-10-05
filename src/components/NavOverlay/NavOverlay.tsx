import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavDrawer } from './NavDrawer/NavDrawer'
import { useDrawer } from 'hooks/useDrawer'
import {
  DesktopSearch,
  ResponsiveStyledBox,
  SearchIconWrapper,
  SiteNameAndLogoContainer,
  StyledAppBar,
  StyledIconButton,
  StyledInputBase,
  StyledTypography
} from './styles'
import { Logo } from 'components/Icons'
import { ShoppingCartDrawer } from './ShoppingCartDrawer'
import { useSearchGames } from 'hooks'
import { CartContext } from 'contexts/CartContext'

export function NavOverlay() {
  const { drawerStates, toggleDrawer } = useDrawer()
  const { searchInput, setSearchInput } = useSearchGames()
  const { cart } = React.useContext(CartContext)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleRefresh = () => {
    window.location.href = '/'
  }

  return (
    <Box flexGrow={1}>
      <StyledAppBar style={{ backgroundColor: '#1E2123', opacity: 1 }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="toggle drawer"
            onClick={() => toggleDrawer('navDrawerOpen')}
          >
            <MenuIcon />
          </StyledIconButton>
          <SiteNameAndLogoContainer>
            <StyledTypography
              variant="h6"
              noWrap
              onClick={handleRefresh}
              style={{ cursor: 'pointer' }}
            >
              Galactic Games
            </StyledTypography>
            <Logo />
          </SiteNameAndLogoContainer>
          <DesktopSearch>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={searchInput}
              onChange={handleSearchChange}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </DesktopSearch>
          <Box flexGrow={1} />
          <ResponsiveStyledBox>
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
              onClick={() => toggleDrawer('cartDrawerOpen')}
            >
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </ResponsiveStyledBox>
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
