import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { menuItems } from '../common/constants'
import styled from 'styled-components'

const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  background: #005288;
  color: white;
  padding-left: 5rem;
  padding-right: 5rem;
`

const MenuItems = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  text-transform: uppercase;
`

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
