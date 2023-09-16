import { ReactNode, useState } from 'react'
import { DataTypeValue } from 'types'
import { DataTypeContext } from './DataTypeContext'

export const DataTypeProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [dataType, setDataType] = useState<DataTypeValue>({
    type: 'recentlyReleased',
    title: 'Recently Released'
  })

  return (
    <DataTypeContext.Provider value={{ dataType, setDataType }}>
      {children}
    </DataTypeContext.Provider>
  )
}
