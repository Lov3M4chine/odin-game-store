import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { StyledGameCardContainerWrapperProps } from 'types'

export const StyledGameCardContainerWrapper = styled.div<StyledGameCardContainerWrapperProps>`
  margin-top: 6rem;
  margin-left: 0rem;
  display: flex;
  flex-direction: column;
  gap: 1rem; // default gap
  flex-wrap: wrap;
  min-height: 100vh;

  @media (max-width: 650px) {
    gap: 0rem; // adjust this value for mobile gap
  }

  @media (min-width: 650px) {
    margin-left: ${({ isOpen }) => (isOpen ? '20rem' : '6rem')};
  }
`

export const DataTypeTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1rem;

  @media (min-width: 650px) {
    justify-content: flex-start;
    margin-left: 0rem;
  }
`

export const DataTypeTypography = styled(Typography)({
  '&.MuiTypography-h3': {
    '@media (max-width: 600px)': {
      fontSize: '2rem' // adjust as per your requirement for mobile
    }
  }
})
