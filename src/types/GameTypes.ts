export type DataTypeValue = {
  type: string
  title: string
  query?: string
}

export type Game = {
  name: string
  id: number
  summary: string
  storyline: string
  cover: {
    id: number
    url: string
  }
  genres: {
    id: number
    name: string
  }[]
  platforms: {
    id: number
    name: string
  }[]
  screenshots: {
    id: number
    url: string
  }[]
  price?: number
  aggregated_rating?: number
  release_dates: {
    human: string
  }[]
  game_engines?: {
    name: string
  }[]
  game_modes?: {
    name: string
  }[]
  involved_companies?: {
    company: {
      name: string
    }
  }[]
}
