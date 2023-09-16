import styled from '@emotion/styled'
import { Divider, Drawer } from '@mui/material'

export const CartDrawer = styled(Drawer)`
  width: 240px;

  & .MuiDrawer-paper {
    width: 240px;
  }
`

export const HeaderDivider = styled(Divider)`
  margin-top: 16px;
`

export const FooterDivider = styled(Divider)`
  position: fixed;
  bottom: 0;
  margin: 8px;
`
