import { Typography } from '@mui/material'

export const GameSummaryContainer: React.FC<{
  summary: string
  storyline: string
}> = ({ summary, storyline }) => (
  <>
    {summary && <Typography variant="h6">{summary}</Typography>}
    {storyline && <Typography variant="h6">{storyline}</Typography>}
  </>
)
