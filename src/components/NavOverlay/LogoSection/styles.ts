import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

export const StyledTypography = styled(Typography)`
  display: block;
  padding-left: 0rem; // Reduce padding for mobile

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-left: 10rem;
  }
`
export const SiteNameAndLogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`
