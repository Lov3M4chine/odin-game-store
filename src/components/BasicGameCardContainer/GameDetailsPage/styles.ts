import styled from '@emotion/styled'
import { StyledGameDetailsPageWrapperProps } from 'types'
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

  @media (max-width: 650px) {
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 100%;
  }

  @media (min-width: 650px) {
    margin-left: ${({ isOpen }) => (isOpen ? '20rem' : '6rem')};
  }

  @media (min-width: 1920px) {
    item-align: center;
  }
`
