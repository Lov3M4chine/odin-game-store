import { Typography, useMediaQuery } from '@mui/material'
import { useGames } from 'hooks/useGames'
import { useContext, useEffect, useState } from 'react'
import { DataTypeContext } from 'contexts/DataTypeContext/DataTypeContext'
import {
  DataTypeTitleContainer,
  DataTypeTypography,
  StyledGameCardContainerWrapper,
  StyledGameCardWrapper
} from './styles'
import { Game } from 'types'
import { BasicGameCard } from './BasicGameCard/BasicGameCard'
import loadingBar from 'assets/loading-bar.gif'
import marioGIF from 'assets/mario.gif'
import loadingText from 'assets/loading-text.gif'
import { DrawerContext } from 'contexts/DrawerContext'
import { Theme } from '@mui/system'

export function BasicGameCardContainer() {
  const { games, isLoading } = useGames()
  const dataTypeContext = useContext(DataTypeContext)
  const isMobileScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  )

  if (!dataTypeContext) {
    throw new Error('DataTypeContext must be used within a DataTypeProvider')
  }

  const drawerContext = useContext(DrawerContext)

  if (!drawerContext) {
    throw new Error(
      'BasicGameCardContainer must be used within a DrawerProvider'
    )
  }

  const { drawerStates } = drawerContext
  // or however you maintain the drawer state
  const isDrawerOpen = drawerStates.navDrawerOpen // assuming 'navDrawerOpen' is the key for the state

  const { dataType } = dataTypeContext

  // States for Mario's position
  const [marioPosition, setMarioPosition] = useState<{
    top: string
    left: string
  }>({ top: '40vh', left: '10vw' })

  const generateRandomPosition = () => {
    let topBoundary, bottomBoundary, leftBoundary, rightBoundary
    if (isMobileScreen) {
      topBoundary = 40 // 20% from the top
      bottomBoundary = 90 // 80% from the top (so, 20% from the bottom)
      leftBoundary = 0 // 10% from the left
      rightBoundary = 50 // 90% from the left (so, 10% from the right)
    } else {
      topBoundary = 30 // 20% from the top
      bottomBoundary = 80 // 80% from the top (so, 20% from the bottom)
      leftBoundary = 10 // 10% from the left
      rightBoundary = 100 // 90% from the left (so, 10% from the right)
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

  useEffect(() => {
    if (isLoading) {
      // Update Mario's position every 2 seconds
      const interval = setInterval(() => {
        const newPosition = generateRandomPosition()
        setMarioPosition(newPosition)
      }, 1500)

      return () => clearInterval(interval) // Cleanup the interval on component unmount
    }
  }, [isLoading])

  return (
    <StyledGameCardContainerWrapper isOpen={isDrawerOpen}>
      <DataTypeTitleContainer>
        <DataTypeTypography
          variant="h3"
          style={{ fontFamily: 'Pixelify_Sans, sans-serif' }}
        >
          {isLoading ? '' : dataType.title}
        </DataTypeTypography>
      </DataTypeTitleContainer>
      {isLoading ? (
        <div className="loading-container">
          <img
            src={loadingText}
            alt="Loading..."
            style={{
              position: 'absolute',
              top: isMobileScreen ? '-2rem' : '-4rem',
              left: isMobileScreen ? '1rem' : '20rem'
            }}
          />
          <img
            src={loadingBar}
            alt="Loading..."
            style={{
              position: 'absolute',
              top: '11rem',
              left: isMobileScreen ? '0rem' : '20rem'
            }}
          />
          <img
            style={{
              position: 'absolute',
              top: marioPosition.top,
              left: marioPosition.left,
              transition: 'all 1.8s ease-out',
              zIndex: 10,
              width: '10rem'
            }}
            src={marioGIF}
            alt="Mario running..."
          />
        </div>
      ) : !games || !games.length ? (
        <Typography variant="h5">
          No games found with that name. Why not explore some of our top picks
          instead?
        </Typography>
      ) : (
        <StyledGameCardWrapper>
          {games.map((game: Game) => (
            <BasicGameCard key={game.id} game={game} />
          ))}
        </StyledGameCardWrapper>
      )}
    </StyledGameCardContainerWrapper>
  )
}
