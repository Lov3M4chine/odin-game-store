import { ReactNode, useContext, useEffect, useState } from 'react'
import { getGames } from 'services/igdbGameService'
import { Game } from 'types'
import { GamesContext } from './GamesContext'
import { DataTypeContext } from 'contexts/DataTypeContext/DataTypeContext'
import { fetchGamesData, getGameCache, setGameCache } from 'utils'

export const GamesProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const dataTypeValue = useContext(DataTypeContext)?.dataType
  const dataType = dataTypeValue?.type || 'recentlyReleased'

  const fetchAndCacheGames = async (type: string) => {
    setIsLoading(true)
    try {
      const fetchedGames = await fetchGamesData(type)
      setGames(fetchedGames)
      setGameCache(type, fetchedGames)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const cachedGames = getGameCache(dataType)
    if (cachedGames) {
      setGames(cachedGames)
    } else {
      fetchAndCacheGames(dataType)
    }
  }, [dataType])

  return (
    <GamesContext.Provider
      value={{
        games,
        setGames,
        fetchGames: fetchAndCacheGames,
        isLoading
      }}
    >
      {children}
    </GamesContext.Provider>
  )
}
