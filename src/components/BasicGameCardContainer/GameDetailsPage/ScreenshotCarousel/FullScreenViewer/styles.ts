import styled from '@emotion/styled'
import { IconButton } from '@mui/material'

export const FullScreenImageContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const FullScreenArrow = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 1rem;
  color: white; // making the arrows white for visibility
  background-color: rgba(
    0,
    0,
    0,
    0.4
  ); // adding some transparency for better visibility
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const FullScreenLeftArrow = styled(FullScreenArrow)`
  left: 0;
`

export const FullScreenRightArrow = styled(FullScreenArrow)`
  right: 0;
`
