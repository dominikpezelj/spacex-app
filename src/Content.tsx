import { ContentWrapper } from './components/styled/components.styled'
import { Navigation } from './components/Navigation'
import { Outlet } from 'react-router-dom'

export const Content = () => {
  return (
    <ContentWrapper>
      <Navigation />
      <Outlet />
    </ContentWrapper>
  )
}
