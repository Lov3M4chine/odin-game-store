import { DataTypeContext } from 'contexts/DataTypeContext'
import { GamesContext } from 'contexts/GamesContext'
import { useContext, useEffect, useRef, useState } from 'react'
import { debounce } from 'utils'
import { searchGames } from 'utils/searchGames'

export const useSearchGames = () => {
  const [searchInput, setSearchInput] = useState('')
  const { setGames } = useContext(GamesContext) ?? {}
  const { setDataType } = useContext(DataTypeContext) ?? {}

  const searchGamesRef = useRef(
    debounce((value) => {
      if (setGames) {
        searchGames(value, 'search', setGames)
      } else {
        console.error('setGames function is undefined')
      }
    }, 300)
  )

  useEffect(() => {
    if (searchInput.length > 2) {
      setDataType?.({
        type: 'search',
        title: 'Search Results',
        query: searchInput
      })
      searchGamesRef.current(searchInput)
    }
  }, [searchInput, setGames, setDataType])

  return {
    searchInput,
    setSearchInput
  }
}
