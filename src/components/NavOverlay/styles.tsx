import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { AppBar, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '40%', // Reduce to 70% for mobile
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

export const StyledAppBar = styled(AppBar)`
  position: fixed;
  width: 100%; // Ensure it takes full width
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`

export const StyledIconButton = styled(IconButton)`
  margin-right: 0rem; // Reduce margin for mobile

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-right: 2rem;
  }
`

export const StyledTypography = styled(Typography)`
  display: block;
  padding-left: 0rem; // Reduce padding for mobile

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-left: 10rem;
  }
`

export const ResponsiveStyledBox = styled(Box)`
  display: flex;
`

export const SiteNameAndLogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`

export const DesktopSearch = styled(Search)`
  @media (max-width: 899px) {
    display: none;
  }
`
