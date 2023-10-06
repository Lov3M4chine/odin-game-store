import { FullScreenViewerProps } from 'types'
import {
  FullScreenImageContainer,
  FullScreenLeftArrow,
  FullScreenRightArrow
} from './styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { CloseIcon, FullScreenOverlay } from '../styles'

export const FullScreenViewer: React.FC<FullScreenViewerProps> = ({
  currentImageIndex,
  images,
  handleCloseFullScreen,
  fontSize,
  goToLeftImage,
  goToRightImage
}) => (
  <FullScreenOverlay onClick={handleCloseFullScreen}>
    <FullScreenImageContainer>
      <img src={images[currentImageIndex]} alt="fullscreen" />
      <FullScreenLeftArrow onClick={goToLeftImage}>
        <ArrowBackIosIcon fontSize={fontSize} />
      </FullScreenLeftArrow>
      <FullScreenRightArrow onClick={goToRightImage}>
        <ArrowForwardIosIcon fontSize={fontSize} />
      </FullScreenRightArrow>
    </FullScreenImageContainer>
    <CloseIcon onClick={handleCloseFullScreen}>X</CloseIcon>
  </FullScreenOverlay>
)
