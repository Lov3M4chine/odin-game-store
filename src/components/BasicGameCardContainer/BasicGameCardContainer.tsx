import {
  DataTypeTitleContainer,
  DataTypeTypography,
  StyledGameCardContainerWrapper
} from './styles'
import { LoadingScreenContainer } from './LoadingScreenContainer'
import {
  useDataTypeContext,
  useDelayedMessage,
  useDrawerContext,
  useGamesContext
} from 'hooks'
import { NoGamesFoundMessage } from './NoGamesFoundMessage'
import { GamesList } from './GamesList'

export function BasicGameCardContainer() {
  const { games, isLoading } = useGamesContext()
  const { dataType } = useDataTypeContext()
  const drawerContext = useDrawerContext()

  const showNoGamesMessage = useDelayedMessage(games, isLoading, 1000)

  return (
    <StyledGameCardContainerWrapper
      isOpen={drawerContext.drawerStates.navDrawerOpen}
    >
      <DataTypeTitleContainer>
        <DataTypeTypography
          variant="h3"
          style={{ fontFamily: 'Pixelify_Sans, sans-serif' }}
        >
          {isLoading ? '' : dataType.title}
        </DataTypeTypography>
      </DataTypeTitleContainer>

      {isLoading ? (
        <LoadingScreenContainer isLoading={isLoading} />
      ) : showNoGamesMessage ? (
        <NoGamesFoundMessage />
      ) : (
        <GamesList games={games} />
      )}
    </StyledGameCardContainerWrapper>
  )
}
