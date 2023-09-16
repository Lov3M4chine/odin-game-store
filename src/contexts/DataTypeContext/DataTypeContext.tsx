import { createContext } from 'react'
import { DataTypeContextType } from 'types'

export const DataTypeContext = createContext<DataTypeContextType | undefined>(
  undefined
)
