export const appName = 'SpaceX'

export const endpoint = 'https://api.spacex.land/graphql/'

export const menuItems = [
  {
    value: 'Missions',
    path: 'missions',
  },
  {
    value: 'Info',
    path: 'info',
  },
]

export const columns = [
  {
    dataField: 'missionName',
    text: 'Mission name',
    sort: true,
  },
  {
    dataField: 'rocketName',
    text: 'Rocket name',
    sort: true,
  },
  {
    dataField: 'launchDateLocal',
    text: 'Launch date',
    sort: true,
  },
  {
    dataField: 'launchSuccess',
    text: 'Launch sucess',
    sort: true,
  },
]
