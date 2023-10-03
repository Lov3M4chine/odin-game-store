import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { useDataType } from 'hooks/useDataType'
import { useNavigate } from 'react-router-dom'
import { NavDrawerListItemProps } from 'types'

export function CustomListItem({ icon, text, type }: NavDrawerListItemProps) {
  const { setDataType } = useDataType()
  const navigate = useNavigate()

  const handleClick = () => {
    if (type) {
      setDataType({
        type: type,
        title: text
      })
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
