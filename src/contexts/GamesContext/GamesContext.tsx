import React from 'react'
import { GamesContextType } from 'types'

export const GamesContext = React.createContext<GamesContextType | undefined>(
  undefined
)
