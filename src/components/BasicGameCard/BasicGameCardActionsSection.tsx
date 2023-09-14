import { Button, CardActions, Typography } from '@mui/material'

const BasicGameCardActionSection: React.FC = () => {
  return (
    <CardActions
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 0.5
      }}
    >
      <Button size="small" color="primary" variant="contained">
        Details
      </Button>
      <Typography sx={{ fontSize: 15, padding: 1 }}>$69.99</Typography>
      <Button size="small" color="secondary" variant="contained">
        Add to Cart
      </Button>
    </CardActions>
  )
}

export default BasicGameCardActionSection
