import { DrawerContext } from 'contexts/contexts'
import React from 'react'

export const useDrawer = () => {
  const context = React.useContext(DrawerContext)
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider')
  }
  return context
}
