import { Navigation } from './components/Navigation'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  background: #dfddda;
  display: block;
  min-height: 100vh;
  flex-direction: column;
`

export const Content = () => {
  return (
    <ContentWrapper>
      <Navigation />
      <Outlet />
    </ContentWrapper>
  )
}
