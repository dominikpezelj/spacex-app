import Header from '../components/Header'
import { MissionsDetails } from '../components/MissionsDetails'
import { MissionsTable } from '../components/MissionsTable'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div`
  max-width: 100%;
  padding: 0 5rem;
  margin: 0 auto;
`

export const Missions = () => {
  const { missionId } = useParams()

  if (missionId) {
    return (
      <div>
        <Header />
        <Container>
          <MissionsDetails missionId={missionId} />
        </Container>
      </div>
    )
  }

  return (
    <Container>
      <MissionsTable />
    </Container>
  )
}
