import { useMediaQuery, useTheme } from '@mui/material'

export function useIsMobileScreen(): boolean {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return isMobile
}
