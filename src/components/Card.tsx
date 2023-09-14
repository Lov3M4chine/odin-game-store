import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Game } from 'types/types'
import { DynamicFontSizeTypography } from './DynamicFontSize'

export default function GameCard({ game }: { game: Game }) {
  const coverURL = game.cover?.url

  return (
    <Card sx={{ width: 250, height: 450, margin: 3, borderRadius: '1rem' }}>
      <CardActionArea>
        {coverURL ? (
          <CardMedia
            sx={{
              width: '100%', // Full width of the container
              height: 350, // Full height of the container
              objectFit: 'cover'
            }}
            component="img"
            image={coverURL}
            alt={`${game.name} cover`}
          />
        ) : null}
        <CardContent sx={{ paddingBottom: 1 }}>
          <div className="flex items-center justify-between">
            <DynamicFontSizeTypography text={game.name} />
            <Typography sx={{ padding: 1 }}>$69.99</Typography>
          </div>
          <Typography sx={{ display: 'flex', gap: 4 }}></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 0.5
        }}
      >
        <Button size="small" color="primary">
          Details
        </Button>
        <Button size="small" color="secondary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}
