import { useCart } from 'hooks'
import { PriceLabel, StyledButton } from './styles'
import { Game } from 'types'

export function GameDetailsAddToCartButton({ game }: { game: Game }) {
  const { addGameToCart } = useCart()

  return (
    <StyledButton
      size="large"
      color="secondary"
      variant="contained"
      onClick={() => addGameToCart(game)}
    >
      <span>Add to Cart</span>
      <PriceLabel>${game.price ?? 39.99}</PriceLabel>
    </StyledButton>
  )
}
