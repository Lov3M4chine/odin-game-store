import { DesktopSearch, SearchIconWrapper, StyledInputBase } from '../styles'
import SearchIcon from '@mui/icons-material/Search'

export function SearchBar({
  searchInput,
  onSearchChange
}: {
  searchInput: string
  onSearchChange: (value: string) => void
}) {
  return (
    <DesktopSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchInput}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </DesktopSearch>
  )
}
