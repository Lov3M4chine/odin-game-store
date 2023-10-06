import { styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'

export const StyledIconButton = styled(IconButton)`
  margin-right: 0rem; // Reduce margin for mobile

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-right: 2rem;
  }
`
