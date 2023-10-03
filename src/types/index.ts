import { ReactNode } from 'react'

export type Game = {
  name: string
  id: number
  summary: string
  storyline: string
  cover: {
    id: number
    url: string
  }
  genres: {
    id: number
    name: string
  }[]
  platforms: {
    id: number
    name: string
  }[]
  screenshots: {
    id: number
    url: string
  }[]
  price?: number
  aggregated_rating?: number
  release_dates: {
    human: string
  }[]
  game_engines?: {
    name: string
  }[]
  game_modes?: {
    name: string
  }[]
  involved_companies?: {
    company: {
      name: string
    }
  }[]
}

export type DrawerStates = {
  navDrawerOpen: boolean
  cartDrawerOpen: boolean
}

export type DrawerToggleCallback = (drawer: keyof DrawerStates) => void

export interface DrawerContextType {
  drawerStates: DrawerStates
  toggleDrawer: DrawerToggleCallback
}

export interface DrawerProviderProps {
  children: ReactNode
}

export interface ToggleableComponentProps {
  open: boolean
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void
}

export type NavDrawerListItemProps = {
  icon: React.ReactNode
  text: string
  type?: string
}

export interface NavDrawerToggleProps {
  open: boolean
  onClose: () => void
}

export type PlatformName = 'Xbox' | 'Playstation' | 'PC' | 'Switch'

export type Platform = {
  id: number
  name: string
  platform_logo?: string
}

export type PlatformIconsType = {
  Xbox?: JSX.Element
  Playstation?: JSX.Element
  PC?: JSX.Element
  Switch?: JSX.Element
  [key: string]: JSX.Element | undefined
}

export type GameCardProps = {
  game: Game
}

export interface GameDisplaySectionProps {
  game: Game
}

export type GamesContextType = {
  games: Game[]
  setGames: React.Dispatch<React.SetStateAction<Game[]>>
  fetchGames: (type: string) => Promise<void>
  searchTerm?: string
  setSearchTerm?: (term: string) => void
  isLoading: boolean
}

export interface DataTypeContextType {
  dataType: DataTypeValue
  setDataType: React.Dispatch<React.SetStateAction<DataTypeValue>>
}

export interface DataTypeValue {
  type: string
  title: string
  query?: string
}

export interface DynamicFontSizeTypographyProps {
  text: string
}

export type PlatformIconMapping = {
  [key: string]: React.ReactElement
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: string) => void
  clearCart: () => void
}

export type CartProviderProps = {
  children?: React.ReactNode
}
