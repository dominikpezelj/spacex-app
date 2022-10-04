import { SpinnerElement, SpinnerText } from './styled/components.styled'

import { Spinner } from 'react-bootstrap'

export const LoadingSpinner = () => {
  return (
    <SpinnerElement>
      <Spinner animation='grow' variant='dark' />
      <SpinnerText>Fetching data...</SpinnerText>
    </SpinnerElement>
  )
}
