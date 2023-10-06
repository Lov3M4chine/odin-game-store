import { useEffect, useState } from 'react'
import { Game } from 'types'
import { fetchGamesData, getGameCache, setGameCache } from 'utils'

export const useFetchAndCacheGames = (dataType: string) => {
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(false)

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

  return {
    games,
    isLoading,
    fetchGames: fetchAndCacheGames,
    setGames,
    setIsLoading
  }
}
