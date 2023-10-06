import MenuIcon from '@mui/icons-material/Menu'
import { StyledIconButton } from './styles'

export function NavButton({ onClick }: { onClick: () => void }) {
  return (
    <StyledIconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="toggle drawer"
      onClick={onClick}
    >
      <MenuIcon />
    </StyledIconButton>
  )
}
