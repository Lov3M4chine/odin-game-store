import { ThemeProvider } from '@mui/material/styles'
import theme from 'styling/theme'
import GameCardContainer from './GameCardContainer'
import NavOverlay from './NavOverlay'
import { useEffect, useState } from 'react'
import { Game } from 'types/types'
import { GamesContext } from 'contexts/contexts'
import { DrawerProvider } from './NavDrawer'
import { getGamesWithDetails } from 'services/igdbGameService'

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    const cachedDataString = sessionStorage.getItem('gamesData')
    const cachedData = cachedDataString ? JSON.parse(cachedDataString) : null

    if (cachedData && cachedData.games) {
      setGames(cachedData.games)
    } else {
      getGamesWithDetails()
        .then((data) => {
          setGames(data)
        })
        .catch((error) => console.error('Error fetching games:', error))
    }
  }, [])

  return (
    <GamesContext.Provider value={games}>
      <ThemeProvider theme={theme}>
        <DrawerProvider>
          <NavOverlay />
        </DrawerProvider>
        <GameCardContainer />
      </ThemeProvider>
    </GamesContext.Provider>
  )
}

export default App
