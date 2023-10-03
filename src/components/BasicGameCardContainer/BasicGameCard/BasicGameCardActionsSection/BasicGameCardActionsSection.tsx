import { StyledCardActions, StyledTypography } from './styles'
import { Game } from 'types'
import { Link } from 'react-router-dom'
import { useCart } from 'hooks'
import { Button } from '@mui/material'

export const BasicGameCardActionSection: React.FC<{ game: Game }> = ({
  game
}) => {
  const { addGameToCart } = useCart()

  return (
    <StyledCardActions>
      <Link to={`/game/${game.id}`}>
        <Button size="small" color="primary" variant="contained">
          Details
        </Button>
      </Link>
      <StyledTypography>${(game.price ?? 39.99).toFixed(2)}</StyledTypography>
      <Button
        size="small"
        color="secondary"
        variant="contained"
        onClick={() => addGameToCart(game)}
      >
        Add to Cart
      </Button>
    </StyledCardActions>
  )
}
