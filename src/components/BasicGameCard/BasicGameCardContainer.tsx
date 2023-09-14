import {
  StyledGameCardContainerWrapper,
  StyledGameCardWrapper
} from 'styling/GameCardStyles'
import { Typography } from '@mui/material'
import BasicGameCard from './BasicGameCard'
import { Game } from 'types/types'
import { useGames } from 'hooks/useGames'

export default function BasicGameCardContainer() {
  const { games } = useGames()

  return (
    <>
      <StyledGameCardContainerWrapper>
        <Typography variant="h3">Recently Released</Typography>
        <StyledGameCardWrapper>
          {games.map((game: Game) => (
            <BasicGameCard key={game.id} game={game} />
          ))}
        </StyledGameCardWrapper>
      </StyledGameCardContainerWrapper>
    </>
  )
}
