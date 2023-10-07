import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import { ShoppingCartDrawer } from './ShoppingCartDrawer'
import { useDrawerContext, useSearchGames } from 'hooks'
import { CartContext } from 'contexts/CartContext'
import { DrawerBackdrop, StyledAppBar } from './styles'
import { NavButton } from './NavButton'
import { LogoSection } from './LogoSection'
import { SearchBar } from './SearchBar'
import { CartButton } from './CartButton/CartButton'
import { Box } from '@mui/material'
import { useIsMobileScreen } from 'hooks/useIsMobileScreen'
import { NavDrawer } from './NavDrawer'

export function NavOverlay() {
  const { drawerStates, toggleDrawer } = useDrawerContext()
  const { searchInput, setSearchInput } = useSearchGames()
  const { cart } = React.useContext(CartContext)
  const isMobile = useIsMobileScreen()

  const handleSearchChange = (value: string) => {
    setSearchInput(value)
  }

  const handleRefresh = () => {
    window.location.href = '/'
  }

  const handleBackdropClick = () => {
    if (isMobile && drawerStates.navDrawerOpen) {
      toggleDrawer('navDrawerOpen')
    }
  }

  return (
    <Box flexGrow={1}>
      <StyledAppBar style={{ backgroundColor: '#1E2123', opacity: 1 }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavButton onClick={() => toggleDrawer('navDrawerOpen')} />
          <LogoSection onClick={handleRefresh} />
          <SearchBar
            searchInput={searchInput}
            onSearchChange={handleSearchChange}
          />
          <Box flexGrow={1} />
          <CartButton
            cartLength={cart.length}
            onClick={() => toggleDrawer('cartDrawerOpen')}
          />
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
      {isMobile && drawerStates.navDrawerOpen && (
        <DrawerBackdrop onClick={handleBackdropClick} />
      )}
    </Box>
  )
}
