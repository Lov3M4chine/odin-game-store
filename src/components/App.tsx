import { ThemeProvider } from '@mui/material/styles'
import theme from 'styling/theme'
import NavOverlay from './NavOverlay'
import { DrawerProvider } from 'contexts/DrawerContext'
import GameCardContainer from './GameCardContainer'

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
