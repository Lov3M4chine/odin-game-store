import { ReactNode, useContext, useEffect, useState } from 'react'
import { getGames } from 'services/igdbGameService'
import { Game } from 'types'
import { GamesContext } from './GamesContext'
import { DataTypeContext } from 'contexts/DataTypeContext/DataTypeContext'

export const GamesProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const dataTypeValue = useContext(DataTypeContext)?.dataType
  const dataType = dataTypeValue?.type || 'recentlyReleased'

  const fetchAndCacheGames = async (type: string) => {
    setIsLoading(true)
    console.log('Is loading set to true')
    try {
      const fetchedGames = await getGames(type)
      setGames(fetchedGames)
      sessionStorage.setItem(
        `gamesData-${type}`,
        JSON.stringify({ games: fetchedGames })
      )
    } catch (error) {
      console.error('Failed fetching game data', error)
    } finally {
      setIsLoading(false)
      console.log('Is loading set to false')
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
