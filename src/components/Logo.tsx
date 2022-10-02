import { Link } from 'react-router-dom'
import { appName } from '../common/constants'
import styled from 'styled-components'

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
`

export const Logo = () => {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <LogoStyled>
        <img src='/static/images/rocket.svg' width={30} alt={'Rocket logo'} />
        <div
          style={{
            fontSize: '25px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: 'white',
            lineHeight: '1rem',
          }}
        >
          {appName}
        </div>
      </LogoStyled>
    </Link>
  )
}
