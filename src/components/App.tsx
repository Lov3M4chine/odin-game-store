import { ThemeProvider } from '@emotion/react'
import { DataTypeProvider } from 'contexts/DataTypeContext/DataTypeProvider'
import { DrawerProvider } from 'contexts/DrawerContext/DrawerProvider'
import { GamesProvider } from 'contexts/GamesContext/GamesProvider'
import theme from 'theme'
import { NavOverlay } from './NavOverlay'
import { BasicGameCardContainer } from './BasicGameCardContainer'
import { CartProvider } from 'contexts/CartContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameDetailsPage } from './BasicGameCardContainer/GameDetailsPage'
import 'fonts.css'
import { ScrollToTop } from './ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DataTypeProvider>
        <GamesProvider>
          <ThemeProvider theme={theme}>
            <DrawerProvider>
              <CartProvider>
                <NavOverlay />
                <Routes>
                  <Route path="/game/:id" element={<GameDetailsPage />} />
                  <Route path="/" element={<BasicGameCardContainer />} />
                </Routes>
              </CartProvider>
            </DrawerProvider>
          </ThemeProvider>
        </GamesProvider>
      </DataTypeProvider>
    </BrowserRouter>
  )
}

export default App
