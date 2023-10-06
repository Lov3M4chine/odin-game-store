import { ReactNode } from 'react'
import { DrawerStates, DrawerToggleCallback } from './DrawerTypes'
import { DataTypeValue, Game } from './GameTypes'
import { CartItemProps } from './UITypes'

export type GamesContextType = {
  games: Game[]
  setGames: React.Dispatch<React.SetStateAction<Game[]>>
  fetchGames: (type: string) => Promise<void>
  searchTerm?: string
  setSearchTerm?: (term: string) => void
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DataTypeContextType {
  dataType: DataTypeValue
  setDataType: React.Dispatch<React.SetStateAction<DataTypeValue>>
}

export interface CartContextType {
  cart: CartItemProps[]
  addToCart: (item: CartItemProps) => void
  removeFromCart: (itemId: string) => void
  clearCart: () => void
}

export type CartProviderProps = {
  children?: React.ReactNode
}

export type DrawerContextType = {
  drawerStates: DrawerStates
  toggleDrawer: DrawerToggleCallback
}

export interface DrawerProviderProps {
  children: ReactNode
}
