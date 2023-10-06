import styled from '@emotion/styled'

export const StyledGameCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (min-width: 650px) {
    justify-content: flex-start;
  }
`
