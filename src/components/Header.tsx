import { HeaderContent, HeaderStyled } from './styled/components.styled'

import { RootState } from '../store'
import { Stack } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const Header = () => {
  const missionName = useSelector((state: RootState) => {
    return state.header.headerMissionName
  })
  const missionPatch = useSelector((state: RootState) => {
    return state.header.headerPatch
  })

  return (
    <HeaderStyled>
      <HeaderContent>
        <Stack direction='horizontal' gap={3}>
          {missionPatch && <img src={missionPatch} width={200} />}

          <div>{missionName}</div>
        </Stack>
      </HeaderContent>
    </HeaderStyled>
  )
}

export default Header
