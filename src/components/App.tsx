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
// src/index.js or another entry point
import 'fonts.css'

function App() {
  return (
    <BrowserRouter>
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
