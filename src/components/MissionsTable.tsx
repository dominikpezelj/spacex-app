import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import '../common/table.css'

import BootstrapTable from 'react-bootstrap-table-next'
import { Container } from './styled/components.styled'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { columns } from '../common/constants'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { useGetAllMissions } from '../hooks/useGetAllMissions'
import { useNavigate } from 'react-router-dom'

export const MissionsTable = () => {
  const navigate = useNavigate()

  const { missionsList } = useGetAllMissions()

  const rowEvents = {
    onClick: (e: any, row: any, rowIndex: any) => {
      navigate('/missions/' + row.id)
    },
  }

  return (
    <Container>
      <BootstrapTable
        bootstrap4
        keyField='id'
        data={missionsList}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 10 })}
        rowEvents={rowEvents}
        noDataIndication={<LoadingSpinner />}
      />
    </Container>
  )
}
