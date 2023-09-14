import {
  StyledGameCardContainerWrapper,
  StyledGameCardWrapper
} from 'styling/GameCardStyles'
import GameCard from './Card'
import { Typography } from '@mui/material'
import { useContext } from 'react'
import { GamesContext } from 'contexts/contexts'

export default function GameCardContainer() {
  const games = useContext(GamesContext)
  return (
    <>
      <StyledGameCardContainerWrapper>
        <Typography variant="h3">Recently Released</Typography>
        <StyledGameCardWrapper>
          {games?.map((game) => <GameCard key={game.name} game={game} />)}
        </StyledGameCardWrapper>
      </StyledGameCardContainerWrapper>
    </>
  )
}
