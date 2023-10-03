import { GamesContext } from 'contexts/GamesContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StyledGameDetailsPageWrapper } from '../styles'
import { Typography } from '@mui/material'
import Carousel from './Carousel'

export const GameDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // Access the context
  const context = useContext(GamesContext)

  if (!context) {
    throw new Error('GameDetailsPage must be used within a GamesProvider')
  }

  const { games } = context

  // Find the game by ID
  const game = games.find((game) => game.id.toString() === id)

  // Render game details
  if (!game) {
    return (
      <div>
        Oops! The game details could not be shown. Please try again later.
      </div>
    )
  }

  const screenshots = game.screenshots.map(
    (screenshot) => 'https:' + screenshot.url
  )

  const platforms = game.platforms
    ? game.platforms.map((platform) => platform.name).join(', ')
    : 'N/A'
  const genres = game.genres
    ? game.genres.map((genre) => genre.name).join(', ')
    : 'N/A'
  const gameModes = game.game_modes
    ? game.game_modes.map((mode) => mode.name).join(', ')
    : 'N/A'
  const companies = game.involved_companies
    ? game.involved_companies.map((item) => item.company.name).join(', ')
    : 'N/A'
  const gameEngineName = game.game_engines
    ? game.game_engines.map((engine) => engine.name).join(', ')
    : 'N/A'

  return (
    <StyledGameDetailsPageWrapper>
      <Typography variant="h3">{game.name}</Typography>
      <Carousel images={screenshots} />
      <Typography variant="h5">{game.summary}</Typography>
      <Typography variant="h5">{game.storyline}</Typography>
      {platforms !== 'N/A' && (
        <Typography variant="h5">Platforms: {platforms}</Typography>
      )}
      {game.aggregated_rating && (
        <Typography variant="h5">
          Community Rating: {game.aggregated_rating.toFixed(2)}
        </Typography>
      )}
      {genres !== 'N/A' && (
        <Typography variant="h5">Genres: {genres}</Typography>
      )}
      {game.release_dates?.[0]?.human && (
        <Typography variant="h5">
          Release Date: {game.release_dates[0].human}
        </Typography>
      )}
      {gameEngineName !== 'N/A' && (
        <Typography variant="h5">Game Engine: {gameEngineName}</Typography>
      )}
      {gameModes !== 'N/A' && (
        <Typography variant="h5">Game Modes: {gameModes}</Typography>
      )}
      {companies !== 'N/A' && (
        <Typography variant="h5">Companies: {companies}</Typography>
      )}
    </StyledGameDetailsPageWrapper>
  )
}
