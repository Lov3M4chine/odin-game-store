import React from 'react'
import { Typography } from '@mui/material'
import { GameDisplaySectionProps } from 'types'
import {
  StyledCardActionArea,
  StyledCardContent,
  StyledCardMedia,
  StyledCenterText
} from './styles'
import { getPlatformIcon, groupPlatforms } from 'utils'
import { DynamicFontSizeTypography } from 'utils/DynamicFontSizeTypography'

export const BasicGameDisplaySection: React.FC<GameDisplaySectionProps> = ({
  game
}) => {
  const coverURL = game.cover?.url
  const platformGroups = groupPlatforms(game.platforms)

  return (
    <StyledCardActionArea>
      {coverURL ? (
        <StyledCardMedia
          component="img"
          image={coverURL}
          alt={`${game.name} cover`}
        />
      ) : null}
      <StyledCardContent>
        <StyledCenterText>
          <DynamicFontSizeTypography text={game.name} />
        </StyledCenterText>
        <Typography className="platform-icons">
          {platformGroups.map((groupName) => {
            const iconElement = getPlatformIcon(groupName)
            return (
              <React.Fragment key={groupName}>{iconElement}</React.Fragment>
            )
          })}
        </Typography>
      </StyledCardContent>
    </StyledCardActionArea>
  )
}
