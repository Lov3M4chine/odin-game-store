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
  Search,
  SearchIconWrapper,
  StyledAppBar,
  StyledBox,
  StyledIconButton,
  StyledInputBase,
  StyledTypography
} from './styles'
import { Logo } from 'components/Icons'
import { ShoppingCartDrawer } from './ShoppingCartDrawer'
import { debounce } from 'utils/helpers'
import { searchGames } from 'utils/searchGames'
import { GamesContext } from 'contexts/GamesContext'
import { DataTypeContext } from 'contexts/DataTypeContext'

export function NavOverlay() {
  const { drawerStates, toggleDrawer } = useDrawer()
  const [searchInput, setSearchInput] = React.useState('')
  const { setGames } = React.useContext(GamesContext) ?? {}
  const { setDataType } = React.useContext(DataTypeContext) ?? {}

  const searchGamesRef = React.useRef(
    debounce((value) => {
      if (setGames) {
        searchGames(value, 'search', setGames)
      } else {
        console.error('setGames function is undefined')
      }
    }, 300)
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchInput(value)
  }

  React.useEffect(() => {
    if (searchInput.length > 2) {
      setDataType?.({
        type: 'search',
        title: 'Search Results',
        query: searchInput
      })
      searchGamesRef.current(searchInput)
    }
  }, [searchInput, setGames, setDataType])

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
              value={searchInput}
              onChange={handleSearchChange}
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
