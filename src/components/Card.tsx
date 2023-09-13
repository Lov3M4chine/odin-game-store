import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import XboxIcon from './Icons/XboxIcon'
import PlaystationIcon from './Icons/PlaystationIcon'
import SwitchIcon from './Icons/SwitchIcon'
import PCIcon from './Icons/PCIcon'

export default function GameCard() {
  return (
    <Card
      sx={{ maxWidth: 300, maxHeight: 490, margin: 3, borderRadius: '1rem' }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/test.png"
          alt="green iguana"
        />
        <CardContent sx={{ paddingBottom: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            Starfield
          </Typography>
          <Typography sx={{ display: 'flex', gap: 4 }}>
            <XboxIcon />
            <PlaystationIcon />
            <PCIcon />
            <SwitchIcon />
          </Typography>
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
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}
