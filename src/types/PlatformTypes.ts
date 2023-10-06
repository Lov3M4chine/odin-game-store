export type PlatformName = 'Xbox' | 'Playstation' | 'PC' | 'Switch'

export type Platform = {
  id: number
  name: string
  platform_logo?: string
}

export type PlatformIconsType = {
  Xbox?: JSX.Element
  Playstation?: JSX.Element
  PC?: JSX.Element
  Switch?: JSX.Element
  [key: string]: JSX.Element | undefined
}

export type PlatformIconMapping = {
  [key: string]: React.ReactElement
}
