import { useEffect, useState } from 'react'

import { GET_MISSION_BY_ID } from '../graphql/query'
import { MissionDetails } from './interface'
import { graphQLClient } from '../graphql/client'
import { headerActions } from '../store/header'
import { useDispatch } from 'react-redux'

export const useGetMissionById = (missionId: string) => {
  const [missionDetailsList, setMissionDetailsList] = useState<MissionDetails>()

  const dispatch = useDispatch()
  const getData = async () => {
    const data = await graphQLClient.request(GET_MISSION_BY_ID, { id: missionId })
    const { launch } = data
    setMissionDetailsList(launch)

    const { mission_patch: missionPatch } = launch.links
    const { mission_name: missionName } = launch
    dispatch(headerActions.headerPatch(missionPatch))
    dispatch(headerActions.headerMissionName(missionName))
    console.log(launch)
  }
  useEffect(() => {
    getData()
  }, [])

  return { missionDetailsList }
}
