import { useParams } from 'react-router-dom'
import { DataTypeTypography, StyledGameDetailsPageWrapper } from '../styles'
import { useDrawerContext, useGamesContext } from 'hooks'
import { useIsMobileScreen } from 'hooks/useIsMobileScreen'
import { processGameData } from 'utils/processGameData'
import { ScreenshotCarousel } from './ScreenshotCarousel'
import { GameDetailsAddToCartButton } from './GameDetailsAddToCartButton/GameDetailsAddToCartButton'
import { GameSummaryContainer } from './GameSummaryContainer'
import { GameDataDisplayContainer } from './GameDataDisplayContainer'

export const GameDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const isMobile = useIsMobileScreen()
  const drawerContext = useDrawerContext()
  const { games } = useGamesContext()
  const game = games.find((game) => game.id.toString() === id)
  if (!game) {
    return (
      <div>
        Oops! The game details could not be shown. Please try again later.
      </div>
    )
  }
  const gameData = processGameData(game)

  return (
    <StyledGameDetailsPageWrapper
      isOpen={drawerContext.drawerStates.navDrawerOpen}
    >
      <DataTypeTypography
        variant="h3"
        style={{ fontFamily: 'Pixelify_Sans, sans-serif' }}
      >
        {game.name}
      </DataTypeTypography>
      <ScreenshotCarousel images={gameData.screenshots} />
      <GameDetailsAddToCartButton game={game} />
      <GameSummaryContainer
        summary={gameData.summary}
        storyline={game.storyline}
      />
      <GameDataDisplayContainer
        dataRows={gameData.dataRows}
        isMobile={isMobile}
      />
    </StyledGameDetailsPageWrapper>
  )
}
