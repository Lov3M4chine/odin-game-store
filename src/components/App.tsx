import { ThemeProvider } from '@mui/material/styles'
import theme from 'styling/theme'
import BasicGameCardContainer from './BasicGameCard/BasicGameCardContainer'
import NavOverlay from './NavOverlay'
import { DataTypeProvider, GamesProvider } from 'contexts/contexts'
import { DrawerProvider } from './NavDrawer'

function App() {
  return (
    <DataTypeProvider>
      <GamesProvider>
        <ThemeProvider theme={theme}>
          <DrawerProvider>
            <NavOverlay />
            <BasicGameCardContainer />
          </DrawerProvider>
        </ThemeProvider>
      </GamesProvider>
    </DataTypeProvider>
  )
}

export default App
