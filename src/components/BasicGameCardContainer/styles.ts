import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import {
  StyledGameCardContainerWrapperProps,
  StyledGameDetailsPageWrapperProps
} from 'types'

export const StyledGameCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (min-width: 650px) {
    justify-content: flex-start;
  }
`

export const StyledGameCardContainerWrapper = styled.div<StyledGameCardContainerWrapperProps>`
  margin-top: 6rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  min-height: 100vh;

  @media (min-width: 650px) {
    margin-left: ${({ isOpen }) => (isOpen ? '20rem' : '6rem')};
  }
`

export const StyledGameDetailsPageWrapper = styled.div<StyledGameDetailsPageWrapperProps>`
  margin-left: 2rem;
  margin-right: 5rem;
  margin-top: 6rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  min-height: 100vh;
  max-width: 1000px;

  @media (min-width: 650px) {
    margin-left: ${({ isOpen }) => (isOpen ? '20rem' : '6rem')};
  }

  @media (min-width: 1920px) {
    item-align: center;
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

export const DataTypeTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-h3': {
    '@media (max-width:600px)': {
      fontSize: '2rem' // adjust as per your requirement for mobile
    }
  }
}))
