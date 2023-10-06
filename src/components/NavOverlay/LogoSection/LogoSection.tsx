import { Logo } from 'components/Icons'
import { SiteNameAndLogoContainer, StyledTypography } from './styles'

export function LogoSection({ onClick }: { onClick: () => void }) {
  return (
    <SiteNameAndLogoContainer>
      <StyledTypography
        variant="h6"
        noWrap
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        Galactic Games
      </StyledTypography>
      <Logo />
    </SiteNameAndLogoContainer>
  )
}
