import { ThemeProvider } from '@mui/material/styles'
import theme from 'styling/theme'
import NavOverlay from './NavOverlay'
import { DrawerProvider } from 'contexts/DrawerContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        <NavOverlay />
      </DrawerProvider>
    </ThemeProvider>
  )
}

export default App
