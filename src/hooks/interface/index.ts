export interface MissionData {
  id: number
  mission_name: string
  rocket: Rocket
  launch_date_local: string
  launch_success: boolean
}

export interface Rocket {
  rocket_name: string
}

export interface MissionDetails {
  details: string
  launch_site: LaunchSite
  launch_success: boolean
  mission_name: string
  rocket: MissionDetailsRocket
  ships: Ship[]
  links: Links
  launch_date_local: string
}

export interface LaunchSite {
  site_name: string
  site_name_long: string
}

export interface Links {
  video_link: string
  wikipedia: string
  flickr_images: string[]
  mission_patch: string
  presskit: string
  article_link: string
  reddit_media: string
}

export interface MissionDetailsRocket {
  rocket: RocketRocket
}

export interface RocketRocket {
  company: string
  country: string
  cost_per_launch: number
  description: string
  engines: Engines
  name: string
  type: string
  wikipedia: string
}

export interface Engines {
  number: number
}

export interface Ship {
  home_port: string
  class: number | null
  image: string
  missions: Mission[]
  model: null | string
  name: string
  year_built: number
}

export interface Mission {
  flight: string
  name: string
}

export interface CardItem {
  text: string
  value: string | boolean | number | undefined
}

export interface Mission {
  flight: string
  name: string
}

export interface MissionsArray {
  id: number
  missionName: string
  rocketName: string
  launchDateLocal: string
  launchStatus: JSX.Element
}
