import { LogoStyled, LogoText } from './styled/components.styled'

import { Link } from 'react-router-dom'
import { appName } from '../common/constants'

export const Logo = () => {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <LogoStyled>
        <img src='/static/images/rocket.svg' width={30} alt={'Rocket logo'} />
        <LogoText>{appName}</LogoText>
      </LogoStyled>
    </Link>
  )
}
