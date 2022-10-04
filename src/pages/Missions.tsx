import { ContainerMain } from '../components/styled/components.styled'
import Header from '../components/Header'
import { MissionsDetails } from '../components/MissionsDetails'
import { MissionsTable } from '../components/MissionsTable'
import { useParams } from 'react-router-dom'

export const Missions = () => {
  const { missionId } = useParams()

  if (missionId) {
    return (
      <div>
        <Header />
        <ContainerMain>
          <MissionsDetails missionId={missionId} />
        </ContainerMain>
      </div>
    )
  }

  return (
    <ContainerMain>
      <MissionsTable />
    </ContainerMain>
  )
}
