import React, { ReactNode, createContext, useContext, useState } from 'react'

type DrawerStates = {
  navDrawerOpen: boolean
  cartDrawerOpen: boolean
}

type ToggleDrawerFunction = (drawer: keyof DrawerStates) => void

type DrawerContextType = {
  drawerStates: DrawerStates
  toggleDrawer: ToggleDrawerFunction
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider')
  }
  return context
}

type DrawerProviderProps = {
  children: ReactNode
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [drawerStates, setDrawerStates] = useState<DrawerStates>({
    navDrawerOpen: true,
    cartDrawerOpen: false
  })

  const toggleDrawer: ToggleDrawerFunction = (drawer) => {
    setDrawerStates((prev) => ({ ...prev, [drawer]: !prev[drawer] }))
  }

  return (
    <DrawerContext.Provider value={{ drawerStates, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}
