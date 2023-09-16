import styled from '@emotion/styled'
import { Divider, Drawer } from '@mui/material'

const drawerWidth = 240

export const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
  }
`

export const StyledDivider = styled(Divider)`
  margin-top: 2rem;
`
