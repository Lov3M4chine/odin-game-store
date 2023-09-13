import { ReactNode } from 'react'

export type Game = {
  cover: number
  genre: number[]
  platforms: number[]
  screenshots: number[]
  summary: string
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
}

export interface NavDrawerToggleProps {
  open: boolean
  onClose: () => void
}
