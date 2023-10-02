import { GameCardProps } from 'types'
import { StyledCard } from './styles'
import { BasicGameDisplaySection } from './BasicGameDisplaySection'
import { BasicGameCardActionSection } from './BasicGameCardActionsSection'

export const BasicGameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <StyledCard>
      <BasicGameDisplaySection game={game} />
      <BasicGameCardActionSection game={game} />
    </StyledCard>
  )
}
