import { Mission } from '.'

export interface ImageCarouselProps {
  images: string[]
}
export interface MissionsDetailsProps {
  missionId: string
}

export interface ShipModalProps {
  missions: Mission[]
  missionsCount: number
  show: boolean
  setIsModalOpen(state: boolean): void
}

export interface ShieldProps {
  title: string
  color: string
  url: string
}
