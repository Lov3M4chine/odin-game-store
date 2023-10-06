import loadingBar from 'assets/loading-bar.gif'
import marioGIF from 'assets/mario.gif'
import loadingText from 'assets/loading-text.gif'
import { useMarioPositioning } from 'hooks/useMarioPositioning'
import { LoadingScreenContainerProps } from 'types'
import { useIsMobileScreen } from 'hooks/useIsMobileScreen'
import { LoadingBar, LoadingContainer, LoadingText, MarioImage } from './styles'

export function LoadingScreenContainer({
  isLoading
}: LoadingScreenContainerProps) {
  const marioPosition = useMarioPositioning(isLoading)
  const isMobile = useIsMobileScreen()

  return (
    <LoadingContainer>
      <LoadingText src={loadingText} alt="Loading..." isMobile={isMobile} />
      <LoadingBar src={loadingBar} alt="Loading..." isMobile={isMobile} />
      <MarioImage
        style={{
          top: marioPosition.top,
          left: marioPosition.left
        }}
        src={marioGIF}
        alt="Mario running..."
      />
    </LoadingContainer>
  )
}
