import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import '../common/table.css'

import BootstrapTable from 'react-bootstrap-table-next'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { columns } from '../common/constants'
import paginationFactory from 'react-bootstrap-table2-paginator'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useGetAllMissions } from '../hooks/useGetAllMissions'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const MissionsTable = () => {
  const navigate = useNavigate()

  const { missionsList } = useGetAllMissions()

  const rowEvents = {
    onClick: (e: any, row: any, rowIndex: any) => {
      console.log(e)
      console.log(row.id)
      navigate('/missions/' + row.id)
    },
    /* onMouseEnter: (e: any, row: any, rowIndex: any) => {
      console.log(row.missionName)
    }, */
  }

  useEffect(() => {
    console.log(missionsList)
  }, [missionsList])

  return (
    <Container>
      <BootstrapTable
        bootstrap4
        keyField='id'
        data={missionsList}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
        rowEvents={rowEvents}
        noDataIndication={<LoadingSpinner />}
      />
    </Container>
  )
}
