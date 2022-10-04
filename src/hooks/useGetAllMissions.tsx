import { useEffect, useState } from 'react'

import { GET_ALL_LAUNCHES } from '../graphql/query'
import { MissionData } from './interface'
import { graphQLClient } from '../graphql/client'
import moment from 'moment'
import styled from 'styled-components'

const LaunchStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 1rem 0.3rem 1rem;
  border-radius: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid #005288;
`

const launchStatus = {
  0: <LaunchStatus style={{ background: '#005288' }}>Sucess</LaunchStatus>,
  1: <LaunchStatus style={{ background: 'transparent' }}>Failed</LaunchStatus>,
}

export const useGetAllMissions = () => {
  const [missionsList, setMissionsList] = useState<MissionData[]>([])

  const getData = async () => {
    const missionsArray: any = []

    const data = await graphQLClient.request(GET_ALL_LAUNCHES)
    const { launches } = data
    launches.map((item: MissionData) => {
      missionsArray.push({
        id: item.id,
        missionName: item.mission_name,
        rocketName: item.rocket.rocket_name,
        launchDateLocal: moment(item.launch_date_local).format('MMMM-DD-YYYY h:mm'),
        launchStatus: launchStatus[item.launch_success ? 0 : 1],
      })
    })
    setMissionsList(missionsArray)
  }
  useEffect(() => {
    getData()
  }, [])

  return { missionsList }
}
