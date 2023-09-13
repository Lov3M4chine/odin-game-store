import { ThemeProvider } from '@mui/material/styles'
import theme from 'styling/theme'
import { DrawerProvider } from 'contexts/DrawerContext'
import GameCardContainer from './GameCardContainer'
import NavOverlay from './NavBar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        <NavOverlay />
      </DrawerProvider>
      <GameCardContainer />
    </ThemeProvider>
  )
}

export default App
