import React from 'react'
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea
} from '@mui/material'
import { GameDisplaySectionProps } from 'types/types'
import { DynamicFontSizeTypography } from '../DynamicFontSize'
import XboxIcon from '../Icons/XboxIcon'

const BasicGameDisplaySection: React.FC<GameDisplaySectionProps> = ({
  game
}) => {
  const coverURL = game.cover?.url

  return (
    <CardActionArea>
      {coverURL ? (
        <CardMedia
          sx={{
            width: '100%',
            height: 374,
            objectFit: 'fill'
          }}
          component="img"
          image={coverURL}
          alt={`${game.name} cover`}
        />
      ) : null}
      <CardContent sx={{ paddingBottom: 1 }}>
        <div className="flex items-center justify-center">
          <DynamicFontSizeTypography text={game.name} />
        </div>
        <Typography sx={{ display: 'flex', gap: 4 }}>
          <XboxIcon />
        </Typography>
      </CardContent>
    </CardActionArea>
  )
}

export default BasicGameDisplaySection
