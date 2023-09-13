import { ThemeProvider } from '@mui/material/styles'
import theme from 'styling/theme'
import NavOverlay from './NavOverlay'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavOverlay />
    </ThemeProvider>
  )
}

export default App
