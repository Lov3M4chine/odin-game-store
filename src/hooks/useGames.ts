import { GamesContext } from 'contexts/GamesContext'
import { useContext } from 'react'
import { GamesContextType } from 'types'

export const useGames = (): GamesContextType => {
  const context = useContext(GamesContext)
  if (!context) {
    throw new Error('useGames must be used within a GamesProvider')
  }
  return context
}
