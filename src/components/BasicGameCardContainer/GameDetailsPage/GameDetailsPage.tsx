import { GamesContext } from 'contexts/GamesContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataTypeTypography, StyledGameDetailsPageWrapper } from '../styles'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Theme,
  Typography,
  useMediaQuery
} from '@mui/material'
import Carousel from './Carousel'
import { useCart } from 'hooks'
import { GameDetailsAddToCartStyledButton } from '../BasicGameCard/BasicGameCardActionsSection/styles'
import { DrawerContext } from 'contexts/DrawerContext'
import { Box } from '@mui/system'

export const GameDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { addGameToCart } = useCart()

  const isMobileScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  )

  // Access the context
  const context = useContext(GamesContext)

  if (!context) {
    throw new Error('GameDetailsPage must be used within a GamesProvider')
  }

  const { games } = context

  const drawerContext = useContext(DrawerContext)

  if (!drawerContext) {
    throw new Error(
      'BasicGameCardContainer must be used within a DrawerProvider'
    )
  }

  const { drawerStates } = drawerContext
  // or however you maintain the drawer state
  const isDrawerOpen = drawerStates.navDrawerOpen // assuming 'navDrawerOpen' is the key for the state

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

  const screenshots = game.screenshots
    ? game.screenshots.map((screenshot) => 'https:' + screenshot.url)
    : 'N/A'
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

  interface GameDataRow {
    label: string
    value: string | number
  }
  const dataRows: GameDataRow[] = []

  if (platforms !== 'N/A') {
    dataRows.push({ label: 'Platforms', value: platforms })
  }

  if (game.aggregated_rating) {
    dataRows.push({
      label: 'Community Rating',
      value: game.aggregated_rating.toFixed(2)
    })
  }

  if (genres !== 'N/A') {
    dataRows.push({ label: 'Genres', value: genres })
  }

  if (game.release_dates?.[0]?.human) {
    dataRows.push({ label: 'Release Date', value: game.release_dates[0].human })
  }

  if (gameEngineName !== 'N/A') {
    dataRows.push({ label: 'Game Engine', value: gameEngineName })
  }

  if (gameModes !== 'N/A') {
    dataRows.push({ label: 'Game Modes', value: gameModes })
  }

  if (companies !== 'N/A') {
    dataRows.push({ label: 'Companies', value: companies })
  }

  return (
    <StyledGameDetailsPageWrapper isOpen={isDrawerOpen}>
      <DataTypeTypography
        variant="h3"
        style={{ fontFamily: 'Pixelify_Sans, sans-serif' }}
      >
        {game.name}
      </DataTypeTypography>
      {screenshots !== 'N/A' && <Carousel images={screenshots} />}
      <GameDetailsAddToCartStyledButton
        size="large"
        color="secondary"
        variant="contained"
        onClick={() => addGameToCart(game)}
      >
        <span>Add to Cart</span>
        <span
          style={{
            marginLeft: '2rem',
            fontSize: '.9rem',
            color: 'black',
            backgroundColor: 'green',
            borderRadius: '5px',
            padding: '0.4rem'
          }}
        >
          ${game.price ?? 39.99}
        </span>
      </GameDetailsAddToCartStyledButton>

      {game.summary && <Typography variant="h6">{game.summary}</Typography>}
      {game.storyline && <Typography variant="h6">{game.storyline}</Typography>}

      {isMobileScreen ? (
        <Box>
          {dataRows.map((row, idx) => (
            <Box
              key={idx}
              mb={2}
              padding={1}
              bgcolor="background.paper"
              boxShadow={2}
            >
              <Typography variant="subtitle1">{row.label}:</Typography>
              <Typography>{row.value}</Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="game details">
            <TableBody>
              {dataRows.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.label}:</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </StyledGameDetailsPageWrapper>
  )
}
