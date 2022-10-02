import { CardItem, MissionDetails } from './interface'
import { useEffect, useState } from 'react'

export const usePrepareData = (missionDetailsList: MissionDetails) => {
  const [launchDetailsList, setLaunchDetailsList] = useState<CardItem[]>([])
  const [rocketDetailsList, setRocketDetailsList] = useState<CardItem[]>([])
  useEffect(() => {
    if (missionDetailsList) {
      const {
        launch_site: launchSite,
        launch_success: launchIsSuccess,
        mission_name: missionName,
        launch_date_local: launchDate,
      } = missionDetailsList
      const { site_name: siteName } = launchSite

      const { rocket } = missionDetailsList
      const { name, type, company, country, cost_per_launch: cost, engines } = rocket.rocket
      const { number: numEngines } = engines

      const launchDetails = [
        {
          text: 'Mission name',
          value: missionName,
        },
        {
          text: 'Launch site',
          value: siteName,
        },
        {
          text: 'Launch result',
          value: launchIsSuccess ? 'Success' : 'Failed',
        },
        {
          text: 'Launch date',
          value: launchDate,
        },
      ]

      const rocketDetails = [
        {
          text: 'Rocket name',
          value: name,
        },
        {
          text: 'Rocket type',
          value: type,
        },
        {
          text: 'Company',
          value: company,
        },
        {
          text: 'Country',
          value: country,
        },
        {
          text: 'Cost per launch',
          value: '$ ' + cost,
        },
        {
          text: 'Number of engines',
          value: numEngines,
        },
      ]

      setLaunchDetailsList(launchDetails)
      setRocketDetailsList(rocketDetails)
    }
  }, [missionDetailsList])

  return { launchDetailsList, rocketDetailsList }
}
