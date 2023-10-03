import { Typography } from '@mui/material'
import { useGames } from 'hooks/useGames'
import { useContext, useEffect, useState } from 'react'
import { DataTypeContext } from 'contexts/DataTypeContext/DataTypeContext'
import { StyledGameCardContainerWrapper, StyledGameCardWrapper } from './styles'
import { Game } from 'types'
import { BasicGameCard } from './BasicGameCard/BasicGameCard'
import loadingBar from 'assets/loading-bar.gif'
import marioGIF from 'assets/mario.gif'
import loadingText from 'assets/loading-text.gif'

export function BasicGameCardContainer() {
  const { games, isLoading } = useGames()
  const context = useContext(DataTypeContext)

  if (!context) {
    throw new Error('DataTypeContext must be used within a DataTypeProvider')
  }

  const { dataType } = context

  // States for Mario's position
  const [marioPosition, setMarioPosition] = useState<{
    top: string
    left: string
  }>({ top: '0vh', left: '0vw' })

  const generateRandomPosition = () => {
    const topBoundary = 20 // 20% from the top
    const bottomBoundary = 80 // 80% from the top (so, 20% from the bottom)
    const leftBoundary = 10 // 10% from the left
    const rightBoundary = 90 // 90% from the left (so, 10% from the right)

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
    <StyledGameCardContainerWrapper>
      <Typography variant="h3">{isLoading ? '' : dataType.title}</Typography>
      {isLoading ? (
        <div className="loading-container">
          <img
            src={loadingText}
            alt="Loading..."
            style={{
              position: 'absolute',
              top: '-5rem',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
          <img
            src={loadingBar}
            alt="Loading..."
            style={{
              position: 'absolute',
              top: '11rem',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
          <img
            style={{
              position: 'absolute',
              top: marioPosition.top,
              left: marioPosition.left,
              transition: 'all 1.8s ease-out',
              zIndex: 10,
              width: '10rem' // Adjust this value
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
