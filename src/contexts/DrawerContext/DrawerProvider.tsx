import React from 'react'
import { DrawerProviderProps, DrawerStates, DrawerToggleCallback } from 'types'
import { DrawerContext } from './DrawerContext'

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [drawerStates, setDrawerStates] = React.useState<DrawerStates>({
    navDrawerOpen: true,
    cartDrawerOpen: false
  })

  const toggleDrawer: DrawerToggleCallback = (drawer) => {
    setDrawerStates((prev) => ({ ...prev, [drawer]: !prev[drawer] }))
  }

  return (
    <DrawerContext.Provider value={{ drawerStates, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}
