import styled from '@emotion/styled'

export const LoadingContainer = styled.div`
  /*... any styles you want for the container itself, if any */
`

export const LoadingText = styled.img<{ isMobile: boolean }>`
  position: absolute;
  top: ${({ isMobile }) => (isMobile ? '-2rem' : '-4rem')};
  left: ${({ isMobile }) => (isMobile ? '1rem' : '20rem')};
`

// For the loading bar
export const LoadingBar = styled.img<{ isMobile: boolean }>`
  position: absolute;
  top: 11rem;
  left: ${({ isMobile }) => (isMobile ? '0rem' : '20rem')};
`

// For Mario
export const MarioImage = styled.img`
  position: absolute;
  transition: all 1.8s ease-out;
  z-index: 10;
  width: 10rem;
`
