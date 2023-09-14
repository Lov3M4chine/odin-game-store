import React, { createContext } from 'react'
import { DrawerContextType, Game } from 'types/types'

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined
)

export const GamesContext = React.createContext<Game[] | undefined>(undefined)
