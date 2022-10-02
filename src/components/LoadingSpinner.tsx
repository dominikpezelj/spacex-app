import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const SpinnerElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SpinnerText = styled.div`
  display: flex;
  margin-left: 1rem;
  font-weight: bold;
`

export const LoadingSpinner = () => {
  return (
    <SpinnerElement>
      <Spinner animation='grow' variant='dark' />
      <SpinnerText>Fetching data...</SpinnerText>
    </SpinnerElement>
  )
}
