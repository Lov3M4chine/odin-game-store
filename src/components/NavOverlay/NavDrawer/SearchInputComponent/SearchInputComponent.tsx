import {
  MobileSearch,
  MobileSearchIconWrapper,
  MobileStyledInputBase
} from './styles'
import SearchIcon from '@mui/icons-material/Search'

export const SearchInputComponent: React.FC<{
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
  onClose: () => void
}> = ({ searchInput, setSearchInput, onClose }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClose() // close the drawer
    }
  }

  return (
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
  )
}
