import { Drawer } from '@mui/material'
import { styled } from '@mui/material/styles'

const drawerWidth = 240

export const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
  }
`
