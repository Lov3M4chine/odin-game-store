import { createTheme, ThemeOptions } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#30b2de'
    },
    secondary: {
      main: '#de5c30'
    },
    background: {
      default: '#dad4d4',
      paper: '#3b3737'
    }
  }
}

const theme = createTheme(themeOptions)

export default theme
