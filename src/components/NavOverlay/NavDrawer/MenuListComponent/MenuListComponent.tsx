import { List, Typography } from '@mui/material'
import { StyledDivider } from './styles'
import { CustomListItem } from './CustomListItem'
import { MenuListComponentProps } from 'types'
import { ReactNode } from 'react'

export const MenuListComponent: React.FC<MenuListComponentProps> = ({
  title,
  items
}) => (
  <>
    <StyledDivider role="presentation">
      <Typography variant="h5" color="primary">
        {title}
      </Typography>
    </StyledDivider>
    <List>
      {items.map((item) => (
        <CustomListItem
          key={item.text}
          text={item.text}
          icon={item.icon as ReactNode}
          type={item.type}
        />
      ))}
    </List>
  </>
)
