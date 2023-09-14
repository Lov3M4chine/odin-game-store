import React from 'react'
import { Card } from '@mui/material'
import { GameCardProps } from 'types/types'
import BasicGameDisplaySection from './BasicGameDisplaySection'
import BasicGameCardActionSection from './BasicGameCardActionsSection'

const BasicGameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card sx={{ width: 300, height: 520, margin: 3, borderRadius: '1rem' }}>
      <BasicGameDisplaySection game={game} />
      <BasicGameCardActionSection />
    </Card>
  )
}

export default BasicGameCard
