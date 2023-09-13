import { StyledGameCardWrapper } from 'styling/GameCardStyles'
import GameCard from './Card'

export default function GameCardContainer() {
  return (
    <>
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
    </>
  )
}
