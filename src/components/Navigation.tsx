import { MenuItems, NavigationStyled } from './styled/components.styled'

import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { menuItems } from '../common/constants'

export const Navigation = () => {
  return (
    <NavigationStyled>
      <Logo />
      <MenuItems>
        {menuItems.map((item) => {
          return (
            <Link
              to={item.path}
              style={{ textDecoration: 'none', color: 'white' }}
              key={item.value}
            >
              {item.value}
            </Link>
          )
        })}
      </MenuItems>
      <div>Navigation</div>
    </NavigationStyled>
  )
}
