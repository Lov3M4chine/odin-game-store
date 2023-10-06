export type DrawerStates = {
  navDrawerOpen: boolean
  cartDrawerOpen: boolean
}

export type DrawerToggleCallback = (drawer: keyof DrawerStates) => void
