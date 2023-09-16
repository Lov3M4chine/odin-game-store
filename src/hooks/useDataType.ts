import { DataTypeContext } from 'contexts/DataTypeContext/DataTypeContext'
import { useContext } from 'react'

export const useDataType = () => {
  const context = useContext(DataTypeContext)
  if (!context) {
    throw new Error('useDataType must be used within a DataTypeProvider')
  }
  return context
}
