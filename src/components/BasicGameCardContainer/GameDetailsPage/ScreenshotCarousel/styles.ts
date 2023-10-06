import styled from '@emotion/styled'
import { Box, Paper } from '@mui/material'

export const StyledCarouselContainer = styled(Paper)`
  elevation: 5;
`

export const CarouselImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  margin: 0 5px;
  border-radius: 5px;
`

export const CenteredBox = styled(Box)`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
