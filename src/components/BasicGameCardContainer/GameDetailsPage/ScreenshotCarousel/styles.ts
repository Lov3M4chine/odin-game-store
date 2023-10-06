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

  /* Mobile styles */
  @media (max-width: 650px) {
    max-width: 100%; /* Take the full width of the container */
    height: auto;
  }
`

export const CenteredBox = styled(Box)`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;

  /* Mobile styles */
  @media (max-width: 650x) {
    height: 70vh; /* 70% of the viewport height, adjust as needed */
  }
`

export const FullScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9); /* semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* To ensure it's above all other content */
`
export const CloseIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: red;
  padding: 0.1rem 0.5rem; // Decreased the top and bottom padding
  cursor: pointer;
  border-radius: 50%; // Keeps it round
  font-weight: bold;
  font-size: 1rem; // Adjust this to make the "X" itself smaller or larger
  color: white; // Making the "X" white for contrast against the red background
`
