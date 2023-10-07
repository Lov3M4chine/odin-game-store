import MenuIcon from '@mui/icons-material/Menu'
import { StyledIconButton } from './styles'
import { forwardRef } from 'react'

export const NavButton = forwardRef<HTMLButtonElement, { onClick: () => void }>(
  (props, ref) => {
    return (
      <StyledIconButton
        ref={ref}
        size="large"
        edge="start"
        color="inherit"
        aria-label="toggle drawer"
        {...props}
      >
        <MenuIcon />
      </StyledIconButton>
    )
  }
)

NavButton.displayName = 'NavButton'
