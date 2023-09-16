import React from 'react'
import { StyledButton, StyledCardActions, StyledTypography } from './styles'

export const BasicGameCardActionSection: React.FC = () => {
  return (
    <StyledCardActions>
      <StyledButton size="small" color="primary" variant="contained">
        Details
      </StyledButton>
      <StyledTypography>$69.99</StyledTypography>
      <StyledButton size="small" color="secondary" variant="contained">
        Add to Cart
      </StyledButton>
    </StyledCardActions>
  )
}
