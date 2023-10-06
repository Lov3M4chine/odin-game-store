import React, { useState } from 'react'
import { IconButton, Box } from '@mui/material'
import { ScreenshotCarouselProps } from 'types'
import { CarouselImage, CenteredBox, StyledCarouselContainer } from './styles'
import { useCarousel } from 'hooks/useCarousel'
import { useIsMobileScreen } from 'hooks/useIsMobileScreen'
import { FullScreenViewer } from './FullScreenViewer'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({
  images
}) => {
  const { currentItem, goToPrevSlide, goToNextSlide } = useCarousel(images)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isMobile = useIsMobileScreen()
  const fontSize = isMobile ? 'small' : 'large'

  const goToLeftImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    } else {
      setCurrentImageIndex(images.length - 1)
    }
  }

  const goToRightImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImageIndex(0)
    }
  }

  const handleCloseFullScreen = () => {
    setIsFullScreen(false)
  }

  return (
    <>
      <StyledCarouselContainer>
        <Box display="flex" alignItems="center">
          <IconButton onClick={goToPrevSlide}>
            <ArrowBackIosIcon />
          </IconButton>
          <CenteredBox>
            <CarouselImage
              src={currentItem}
              alt="screenshot"
              onClick={() => setIsFullScreen(true)}
            />
          </CenteredBox>
          <IconButton onClick={goToNextSlide}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </StyledCarouselContainer>
      {isFullScreen && (
        <FullScreenViewer
          currentImageIndex={currentImageIndex}
          images={images}
          handleCloseFullScreen={handleCloseFullScreen}
          fontSize={fontSize}
          goToLeftImage={goToLeftImage}
          goToRightImage={goToRightImage}
        />
      )}
    </>
  )
}
