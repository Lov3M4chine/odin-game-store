import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import { getGames } from 'services/igdbGameService'
import {
  DataTypeContextType,
  DrawerContextType,
  Game,
  GamesContextType
} from 'types/types'

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined
)

export const GamesContext = React.createContext<GamesContextType | undefined>(
  undefined
)

export const DataTypeContext = createContext<DataTypeContextType | undefined>(
  undefined
)

export const DataTypeProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [dataType, setDataType] = useState('recentlyReleased') // Default value

  return (
    <DataTypeContext.Provider value={{ dataType, setDataType }}>
      {children}
    </DataTypeContext.Provider>
  )
}

export const useDataType = () => {
  const context = useContext(DataTypeContext)
  if (!context) {
    throw new Error('useDataType must be used within a DataTypeProvider')
  }
  return context
}

export const GamesProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [games, setGames] = useState<Game[]>([])
  const dataType = useContext(DataTypeContext)?.dataType || 'recentlyReleased'

  const fetchAndCacheGames = async (type: string) => {
    try {
      const fetchedGames = await getGames(type)
      setGames(fetchedGames)
      sessionStorage.setItem(
        `gamesData-${type}`,
        JSON.stringify({ games: fetchedGames })
      )
    } catch (error) {
      console.error('Failed fetching game data', error)
    }
  }

  useEffect(() => {
    const cachedDataString = sessionStorage.getItem(`gamesData-${dataType}`)
    const cachedData = cachedDataString ? JSON.parse(cachedDataString) : null

    if (cachedData && cachedData.games) {
      setGames(cachedData.games)
    } else {
      fetchAndCacheGames(dataType)
    }
  }, [dataType])

  return (
    <GamesContext.Provider
      value={{ games, setGames, fetchGames: fetchAndCacheGames }}
    >
      {children}
    </GamesContext.Provider>
  )
}
