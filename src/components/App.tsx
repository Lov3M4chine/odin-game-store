import { ThemeProvider } from '@mui/material/styles'
import theme from 'styling/theme'
import BasicGameCardContainer from './BasicGameCard/BasicGameCardContainer'
import NavOverlay from './NavOverlay'
import { useContext, useEffect, useState } from 'react'
import { Game } from 'types/types'
import {
  DataTypeProvider,
  GamesContext,
  DataTypeContext
} from 'contexts/contexts'
import { DrawerProvider } from './NavDrawer'
import { getGames } from 'services/igdbGameService'

function App() {
  const [games, setGames] = useState<Game[]>([])
  const dataType = useContext(DataTypeContext)?.dataType || 'recentlyReleased'

  useEffect(() => {
    const cachedDataKey = `gamesData-${dataType}`
    const cachedDataString = sessionStorage.getItem(cachedDataKey)
    const cachedData = cachedDataString ? JSON.parse(cachedDataString) : null

    if (cachedData && cachedData.games) {
      setGames(cachedData.games)
    } else {
      getGames(dataType)
        .then((data) => {
          setGames(data)
        })
        .catch((error) => console.error('Error fetching games:', error))
    }
  }, [dataType])

  return (
    <DataTypeProvider>
      <GamesContext.Provider value={{ games, setGames }}>
        <ThemeProvider theme={theme}>
          <DrawerProvider>
            <NavOverlay />
          </DrawerProvider>
          <BasicGameCardContainer />
        </ThemeProvider>
      </GamesContext.Provider>
    </DataTypeProvider>
  )
}

export default App
