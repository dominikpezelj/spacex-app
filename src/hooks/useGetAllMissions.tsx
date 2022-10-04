import { MissionData, MissionsArray } from './interface'
import { useEffect, useState } from 'react'

import { GET_ALL_LAUNCHES } from '../graphql/query'
import { LaunchStatus } from '../components/styled/components.styled'
import { graphQLClient } from '../graphql/client'
import moment from 'moment'

const launchStatus = {
  0: <LaunchStatus style={{ background: '#005288' }}>Sucess</LaunchStatus>,
  1: <LaunchStatus style={{ background: 'transparent' }}>Failed</LaunchStatus>,
}

export const useGetAllMissions = () => {
  const [missionsList, setMissionsList] = useState<MissionsArray[]>([])

  const getData = async () => {
    const missionsArray: MissionsArray[] = []

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
