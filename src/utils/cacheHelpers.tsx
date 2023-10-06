import { Game } from 'types'

export const setGameCache = (type: string, games: Game[]) => {
  sessionStorage.setItem(`gamesData-${type}`, JSON.stringify({ games }))
}

export const getGameCache = (type: string): Game[] | null => {
  const cachedDataString = sessionStorage.getItem(`gamesData-${type}`)
  let cachedData = null
  if (cachedDataString) {
    try {
      cachedData = JSON.parse(cachedDataString)
    } catch (e) {
      console.error('Error parsing cachedData from session storage:', e)
    }
  }

  return cachedData?.games || null
}
