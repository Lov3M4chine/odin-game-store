import {
  StyledGameCardContainerWrapper,
  StyledGameCardWrapper
} from 'styling/GameCardStyles'
import GameCard from './Card'
import { Typography } from '@mui/material'

export default function GameCardContainer() {
  return (
    <>
      <StyledGameCardContainerWrapper>
        <Typography variant="h3">Coming Soon</Typography>
        <StyledGameCardWrapper>
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </StyledGameCardWrapper>
      </StyledGameCardContainerWrapper>
    </>
  )
}
