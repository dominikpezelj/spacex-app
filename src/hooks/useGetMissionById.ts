import { useEffect, useState } from 'react'

import { graphQLClient } from '../graphql/client'
import { GET_MISSION_BY_ID } from '../graphql/query'
import { MissionDetails } from './interface'

export const useGetMissionById = (missionId: string) => {
  const [missionDetailsList, setMissionDetailsList] = useState<MissionDetails>()

  const getData = async () => {
    const data = await graphQLClient.request(GET_MISSION_BY_ID, { id: missionId })
    const { launch } = data
    setMissionDetailsList(launch)
  }
  useEffect(() => {
    getData()
  }, [])

  return { missionDetailsList }
}
