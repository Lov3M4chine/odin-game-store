import styled from '@emotion/styled'
import {
  CardActionArea,
  CardContent,
  CardMedia,
  CardMediaProps
} from '@mui/material'
import React from 'react'

type ExtendedCardMediaProps = CardMediaProps &
  React.ImgHTMLAttributes<HTMLImageElement>

export const StyledCardMedia = styled(CardMedia)<ExtendedCardMediaProps>`
  width: 100%;
  height: 374px;
  object-fit: fill;
`

export const StyledCardContent = styled(CardContent)`
  padding-bottom: 0.5rem;
  .platform-icons {
    display: flex;
    items-align: center;
    gap: 2rem;
    padding-top: 0.5rem;
  }
`

export const StyledCenterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledCardActionArea = styled(CardActionArea)`
  height: 29rem;
`
