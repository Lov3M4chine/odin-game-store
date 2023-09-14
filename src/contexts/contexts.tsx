import React, { ReactNode, createContext, useContext, useState } from 'react'
import {
  DataTypeContextType,
  DrawerContextType,
  GamesContextType
} from 'types/types'

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined
)

export const GamesContext = React.createContext<GamesContextType | undefined>(
  undefined
)

export const DataTypeContext = createContext<DataTypeContextType | undefined>(
  undefined
)

export const DataTypeProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [dataType, setDataType] = useState('recentlyReleased') // Default value

  return (
    <DataTypeContext.Provider value={{ dataType, setDataType }}>
      {children}
    </DataTypeContext.Provider>
  )
}

export const useDataType = () => {
  const context = useContext(DataTypeContext)
  if (!context) {
    throw new Error('useDataType must be used within a DataTypeProvider')
  }
  return context
}
