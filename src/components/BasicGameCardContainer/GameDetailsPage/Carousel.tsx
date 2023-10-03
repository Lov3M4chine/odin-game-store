import React, { useState } from 'react'
import { IconButton, Paper, Box } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface CarouselProps {
  images: string[] // array of screenshot URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevSlide = () => {
    let index = currentIndex - 1
    if (index < 0) index = images.length - 1 // wrap around
    setCurrentIndex(index)
  }

  const goToNextSlide = () => {
    let index = currentIndex + 1
    if (index >= images.length) index = 0 // wrap around
    setCurrentIndex(index)
  }

  return (
    <Paper elevation={5}>
      <Box display="flex" alignItems="center">
        <IconButton onClick={goToPrevSlide}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box
          flexGrow={1}
          overflow="hidden"
          display="flex"
          justifyContent="center" // This centers the image horizontally
        >
          <img
            src={images[currentIndex]}
            alt="screenshot"
            style={{
              width: 'auto',
              height: '100%',
              objectFit: 'cover',
              margin: '0 5px',
              borderRadius: '5px'
            }}
          />
        </Box>

        <IconButton onClick={goToNextSlide}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Paper>
  )
}

export default Carousel
