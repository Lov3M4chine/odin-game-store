import React, { useContext } from 'react'
import { StyledButton, StyledCardActions, StyledTypography } from './styles'
import { CartItem, Game } from 'types'
import { CartContext } from 'contexts/CartContext'

export const BasicGameCardActionSection: React.FC<{ game: Game }> = ({
  game
}) => {
  const { addToCart } = useContext(CartContext)
  const displayedPrice = game.price ?? 39.99

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...game,
      id: game.id.toString(), // Convert id to string
      quantity: 1,
      price: game.price || 39.99
    }
    addToCart(cartItem)
  }

  return (
    <StyledCardActions>
      <StyledButton size="small" color="primary" variant="contained">
        Details
      </StyledButton>
      <StyledTypography>${displayedPrice.toFixed(2)}</StyledTypography>
      <StyledButton
        size="small"
        color="secondary"
        variant="contained"
        onClick={handleAddToCart}
      >
        Add to Cart
      </StyledButton>
    </StyledCardActions>
  )
}
