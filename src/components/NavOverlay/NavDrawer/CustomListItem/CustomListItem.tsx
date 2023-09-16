import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { useDataType } from 'hooks/useDataType'
import { NavDrawerListItemProps } from 'types'

export function CustomListItem({ icon, text, type }: NavDrawerListItemProps) {
  const { setDataType } = useDataType()

  const handleClick = () => {
    if (type) {
      setDataType({
        type: type,
        title: text
      })
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
