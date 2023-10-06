import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/system'
import { useEffect, useState } from 'react'

export const useMarioPositioning = (isLoading: boolean) => {
  const isMobileScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  )

  const [marioPosition, setMarioPosition] = useState<{
    top: string
    left: string
  }>({ top: '40vh', left: '10vw' })

  useEffect(() => {
    const generateRandomMarioPosition = () => {
      let topBoundary, bottomBoundary, leftBoundary, rightBoundary
      if (isMobileScreen) {
        topBoundary = 40
        bottomBoundary = 90
        leftBoundary = 0
        rightBoundary = 50
      } else {
        topBoundary = 30
        bottomBoundary = 80
        leftBoundary = 10
        rightBoundary = 100
      }

      const randomTop =
        Math.random() * (bottomBoundary - topBoundary) + topBoundary
      const randomLeft =
        Math.random() * (rightBoundary - leftBoundary) + leftBoundary

      return {
        top: `${randomTop}vh`,
        left: `${randomLeft}vw`
      }
    }
    if (isLoading) {
      const interval = setInterval(() => {
        const newPosition = generateRandomMarioPosition()
        setMarioPosition(newPosition)
      }, 1500)

      return () => clearInterval(interval)
    }
  }, [isLoading, isMobileScreen])

  return marioPosition
}
