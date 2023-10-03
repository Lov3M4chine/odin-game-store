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
      default: '#2F3234',
      paper: '#2B2E30'
    }
  }
}

const theme = createTheme(themeOptions)

export default theme
