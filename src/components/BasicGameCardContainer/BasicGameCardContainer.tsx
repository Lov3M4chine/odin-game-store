import { Typography } from '@mui/material'
import { useGames } from 'hooks/useGames'
import { useContext } from 'react'
import { DataTypeContext } from 'contexts/DataTypeContext/DataTypeContext'
import { StyledGameCardContainerWrapper, StyledGameCardWrapper } from './styles'
import { Game } from 'types'
import { BasicGameCard } from './BasicGameCard/BasicGameCard'

export function BasicGameCardContainer() {
  const { games, isLoading } = useGames()
  const context = useContext(DataTypeContext)

  if (!context) {
    throw new Error('DataTypeContext must be used within a DataTypeProvider')
  }

  const { dataType } = context

  return (
    <StyledGameCardContainerWrapper>
      <Typography variant="h3">{dataType.title}</Typography>
      {isLoading ? (
        <Typography variant="h5">Loading...</Typography>
      ) : !games || !games.length ? (
        <Typography variant="h5">
          No games found with that name. Why not explore some of our top picks
          instead?
        </Typography>
      ) : (
        <StyledGameCardWrapper>
          {games.map((game: Game) => (
            <BasicGameCard key={game.id} game={game} />
          ))}
        </StyledGameCardWrapper>
      )}
    </StyledGameCardContainerWrapper>
  )
}
