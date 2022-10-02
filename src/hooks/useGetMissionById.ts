import { useEffect, useState } from 'react'

import { GET_MISSION_BY_ID } from '../graphql/query'
import { MissionDetails } from './interface'
import { graphQLClient } from '../graphql/client'

export const useGetMissionById = (missionId: string) => {
  const [missionDetailsList, setMissionDetailsList] = useState<MissionDetails>()

  const getData = async () => {
    const data = await graphQLClient.request(GET_MISSION_BY_ID, { id: missionId })
    // console.log(JSON.stringify(data.launches, undefined, 2))
    const { launch } = data
    // console.log(arr)
    setMissionDetailsList(launch)
  }
  useEffect(() => {
    getData()
  }, [])

  return { missionDetailsList }
}
