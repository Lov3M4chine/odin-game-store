import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { DrawerContext } from 'contexts/DrawerContext'
import { useDataType } from 'hooks/useDataType'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavDrawerListItemProps } from 'types'

export function CustomListItem({ icon, text, type }: NavDrawerListItemProps) {
  const { setDataType } = useDataType()
  const navigate = useNavigate()
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error('Used `DrawerContext` outside of its provider.')
  }

  const { toggleDrawer } = context

  const handleClick = () => {
    if (type) {
      setDataType({
        type: type,
        title: text
      })
      if (window.innerWidth < 650) {
        toggleDrawer('navDrawerOpen')
      }

      navigate('/')
    }
  }

  return (
    <ListItem disablePadding onClick={handleClick}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}
