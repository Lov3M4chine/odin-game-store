import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { NavDrawerToggleProps } from 'types'
import { StyledDrawer } from './styles'
import { useSearchGames } from 'hooks'
import { SearchInputComponent } from './SearchInputComponent'
import { MenuListComponent } from './MenuListComponent'
import {
  genreMenuItems,
  platformMenuItems,
  topMenuItems
} from './MenuListComponent/MenuItems'
import { Box } from '@mui/material'

export const NavDrawer = React.forwardRef<HTMLDivElement, NavDrawerToggleProps>(
  ({ open, onClose }, ref) => {
    const { searchInput, setSearchInput } = useSearchGames()

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <StyledDrawer
          open={open}
          onClose={onClose}
          variant="persistent"
          ref={ref}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <SearchInputComponent
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              onClose={onClose}
            />
            <MenuListComponent title="Top" items={topMenuItems} />
            <MenuListComponent title="Platform" items={platformMenuItems} />
            <MenuListComponent title="Genre" items={genreMenuItems} />
          </Box>
        </StyledDrawer>
      </Box>
    )
  }
)

NavDrawer.displayName = 'NavDrawer'
