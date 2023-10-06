import { GamesListProps } from 'types'
import { BasicGameCard } from '../BasicGameCard'
import { StyledGameCardWrapper } from './styles'

export const GamesList: React.FC<GamesListProps> = ({ games }) => (
  <StyledGameCardWrapper>
    {games.map((game) => (
      <BasicGameCard key={game.id} game={game} />
    ))}
  </StyledGameCardWrapper>
)
