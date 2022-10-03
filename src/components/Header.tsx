import { Stack } from 'react-bootstrap'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const HeaderStyled = styled.div`
  position: relative;
  background: url('/static/images/header/header_1.jpg') no-repeat;
  background-size: cover;
  height: 30rem;
`

const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
`

export const Header = () => {
  const missionName = useSelector((state: any) => {
    return state.header.headerMissionName
  })
  const missionPatch = useSelector((state: any) => {
    return state.header.headerPatch
  })

  console.log(missionPatch)
  return (
    <HeaderStyled>
      <HeaderContent>
        <Stack direction='horizontal' gap={3}>
          <img src={missionPatch} width={200} />
          <div>{missionName}</div>
        </Stack>
      </HeaderContent>
    </HeaderStyled>
  )
}

export default Header
