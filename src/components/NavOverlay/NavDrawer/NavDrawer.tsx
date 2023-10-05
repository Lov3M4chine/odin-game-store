import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import { Typography } from '@mui/material'
import { NavDrawerToggleProps } from 'types'
import { genreMenuItems, platformMenuItems, topMenuItems } from './MenuItems'
import { CustomListItem } from './CustomListItem'
import {
  MobileSearch,
  MobileSearchIconWrapper,
  MobileStyledInputBase,
  StyledDivider,
  StyledDrawer
} from './styles'
import SearchIcon from '@mui/icons-material/Search'
import { useSearchGames } from 'hooks'

export const NavDrawer: React.FC<NavDrawerToggleProps> = ({
  open,
  onClose
}) => {
  const { searchInput, setSearchInput } = useSearchGames()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClose() // close the drawer
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <StyledDrawer open={open} onClose={onClose} variant="persistent">
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <MobileSearch>
            <MobileSearchIconWrapper>
              <SearchIcon />
            </MobileSearchIconWrapper>
            <MobileStyledInputBase
              value={searchInput}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </MobileSearch>
          <StyledDivider role="presentation">
            <Typography variant="h5" color="primary">
              Top
            </Typography>
          </StyledDivider>
          <List>
            {topMenuItems.map((item) => (
              <CustomListItem key={item.text} {...item} />
            ))}
          </List>
          <StyledDivider role="presentation">
            <Typography variant="h5" color="primary">
              Platform
            </Typography>
          </StyledDivider>
          <List>
            {platformMenuItems.map((item) => (
              <CustomListItem key={item.text} {...item} />
            ))}
          </List>
          <StyledDivider role="presentation">
            <Typography variant="h5" color="primary">
              Genre
            </Typography>
          </StyledDivider>
          <List>
            {genreMenuItems.map((item) => (
              <CustomListItem key={item.text} {...item} />
            ))}
          </List>
        </Box>
      </StyledDrawer>
    </Box>
  )
}
