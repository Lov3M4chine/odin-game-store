import React from 'react'
import { IconButton, Box } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { ScreenshotCarouselProps } from 'types'
import { CarouselImage, CenteredBox, StyledCarouselContainer } from './styles'
import { useCarousel } from 'hooks/useCarousel'

export const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({
  images
}) => {
  const { currentItem, goToPrevSlide, goToNextSlide } = useCarousel(images)

  return (
    <StyledCarouselContainer>
      <Box display="flex" alignItems="center">
        <IconButton onClick={goToPrevSlide}>
          <ArrowBackIosIcon />
        </IconButton>
        <CenteredBox>
          <CarouselImage src={currentItem} alt="screenshot" />
        </CenteredBox>
        <IconButton onClick={goToNextSlide}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </StyledCarouselContainer>
  )
}
