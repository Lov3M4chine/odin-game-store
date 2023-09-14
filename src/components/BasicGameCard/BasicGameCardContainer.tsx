import {
  StyledGameCardContainerWrapper,
  StyledGameCardWrapper
} from 'styling/GameCardStyles'
import { Typography } from '@mui/material'
import { useContext } from 'react'
import { GamesContext } from 'contexts/contexts'
import BasicGameCard from './BasicGameCard'

export default function BasicGameCardContainer() {
  const games = useContext(GamesContext)
  return (
    <>
      <StyledGameCardContainerWrapper>
        <Typography variant="h3">Recently Released</Typography>
        <StyledGameCardWrapper>
          {games?.map((game) => <BasicGameCard key={game.id} game={game} />)}
        </StyledGameCardWrapper>
      </StyledGameCardContainerWrapper>
    </>
  )
}
