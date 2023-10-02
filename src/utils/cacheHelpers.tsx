import { Game } from 'types'

export const setGameCache = (type: string, games: Game[]) => {
  sessionStorage.setItem(`gamesData-${type}`, JSON.stringify({ games }))
}

export const getGameCache = (type: string): Game[] | null => {
  const cachedDataString = sessionStorage.getItem(`gamesData-${type}`)
  const cachedData = cachedDataString ? JSON.parse(cachedDataString) : null
  return cachedData?.games || null
}
