import {
  StyledGameCardContainerWrapper,
  StyledGameCardWrapper
} from 'styling/GameCardStyles'
import { Typography } from '@mui/material'
import BasicGameCard from './BasicGameCard'
import { Game } from 'types/types'
import { useGames } from 'hooks/useGames'
import { useContext } from 'react'
import { DataTypeContext } from 'contexts/contexts'

export default function BasicGameCardContainer() {
  const { games } = useGames()
  const context = useContext(DataTypeContext)

  if (!context) {
    throw new Error('DataTypeContext must be used within a DataTypeProvider')
  }

  const { dataType } = context

  return (
    <>
      <StyledGameCardContainerWrapper>
        <Typography variant="h3">{dataType.title}</Typography>
        <StyledGameCardWrapper>
          {games.map((game: Game) => (
            <BasicGameCard key={game.id} game={game} />
          ))}
        </StyledGameCardWrapper>
      </StyledGameCardContainerWrapper>
    </>
  )
}
