import { ReactNode, useContext } from 'react'
import { GamesContext } from './GamesContext'
import { DataTypeContext } from 'contexts/DataTypeContext/DataTypeContext'
import { useFetchAndCacheGames } from 'hooks/useFetchAndCacheGames'

export const GamesProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const dataTypeValue = useContext(DataTypeContext)?.dataType
  const dataType = dataTypeValue?.type || 'recentlyReleased'
  const { games, isLoading, fetchGames, setGames } =
    useFetchAndCacheGames(dataType)

  return (
    <GamesContext.Provider value={{ games, fetchGames, setGames, isLoading }}>
      {children}
    </GamesContext.Provider>
  )
}
