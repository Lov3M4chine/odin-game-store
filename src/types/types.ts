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

export type ToggleDrawerFunction = (drawer: keyof DrawerStates) => void

export type DrawerContextType = {
  drawerStates: DrawerStates
  toggleDrawer: ToggleDrawerFunction
}
