import { Link } from 'react-router-dom'
import { LogoStyled } from './styled/components.styled'
import { appName } from '../common/constants'

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
