import { Game } from './GameTypes'

export interface StyledGameCardContainerWrapperProps {
  isOpen: boolean
}

export interface StyledGameDetailsPageWrapperProps {
  isOpen: boolean
}

export interface LoadingScreenContainerProps {
  isLoading: boolean
}

export interface GamesListProps {
  games: Game[]
}

export interface GameDataRowProps {
  label: string
  value: string | number
}

export interface GameDataContainerProps {
  dataRows: GameDataRowProps[]
  isMobile: boolean
}

export interface ScreenshotCarouselProps {
  images: string[]
}

export interface GameCardProps {
  game: Game
}

export interface GameDisplaySectionProps {
  game: Game
}

export interface DynamicFontSizeTypographyProps {
  text: string
}

export interface ToggleableComponentProps {
  open: boolean
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void
}

export interface NavDrawerListItemProps {
  icon: React.ReactNode
  text: string
  type?: string
}

export interface NavDrawerToggleProps {
  open: boolean
  onClose: () => void
}

export interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  removeFromCart: (id: string) => void
}

export interface MenuListComponentProps {
  title: string
  items: Array<{
    type: string
    text: string
    icon?: React.ReactNode
  }>
}
