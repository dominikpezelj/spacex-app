import { useEffect, useState } from 'react'

import { GET_ALL_LAUNCHES } from '../graphql/query'
import { MissionData } from './interface'
import { graphQLClient } from '../graphql/client'

export const useGetAllMissions = () => {
  const [missionsList, setMissionsList] = useState<MissionData[]>([])

  const getData = async () => {
    const missionsArray: any = []
    console.log('TESTETST')
    const data = await graphQLClient.request(GET_ALL_LAUNCHES)
    // console.log(JSON.stringify(data.launches, undefined, 2))
    const { launches } = data
    // console.log(launches)
    launches.map((item: MissionData) => {
      missionsArray.push({
        id: item.id,
        missionName: item.mission_name,
        rocketName: item.rocket.rocket_name,
        launchDateLocal: item.launch_date_local,
        launchSuccess: item.launch_success,
      })
    })
    // console.log(arr)
    setMissionsList(missionsArray)
  }
  useEffect(() => {
    getData()
  }, [])

  return { missionsList }
}
