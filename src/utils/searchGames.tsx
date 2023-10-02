import { getGames } from 'services'
import { Game } from 'types'

export const searchGames = async (
  query: string,
  dataType: string,
  setGames: (games: Game[]) => void
) => {
  if (!query.trim()) return

  console.log(
    `searchGames is initializing getGames. dataType is ${dataType} query is ${query}`
  )

  const searchedGames = await getGames(dataType, query)

  setGames(searchedGames)
}
