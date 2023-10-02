import { ThemeProvider } from '@emotion/react'
import { DataTypeProvider } from 'contexts/DataTypeContext/DataTypeProvider'
import { DrawerProvider } from 'contexts/DrawerContext/DrawerProvider'
import { GamesProvider } from 'contexts/GamesContext/GamesProvider'
import theme from 'theme'
import { NavOverlay } from './NavOverlay'
import { BasicGameCardContainer } from './BasicGameCardContainer'
import { CartProvider } from 'contexts/CartContext'

function App() {
  return (
    <DataTypeProvider>
      <GamesProvider>
        <ThemeProvider theme={theme}>
          <DrawerProvider>
            <CartProvider>
              <NavOverlay />
              <BasicGameCardContainer />
            </CartProvider>
          </DrawerProvider>
        </ThemeProvider>
      </GamesProvider>
    </DataTypeProvider>
  )
}

export default App
