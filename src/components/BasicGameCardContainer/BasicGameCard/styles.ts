import styled from '@emotion/styled'
import { Card } from '@mui/material'

export const StyledCard = styled(Card)`
  width: 18rem;
  height: 33rem;
  margin: 0.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    transform: scale(0.9); // scale everything to 90% of its original size
  }
`
