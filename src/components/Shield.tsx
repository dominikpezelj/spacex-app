import { ShieldProps } from '../hooks/interface/props'

export const Shield = ({ title, color, url }: ShieldProps) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <img
        src={`https://img.shields.io/badge/Made%20with%20-%20${title}-${color}.svg`}
        alt={`${title} logo`}
        width={'100%'}
      />
    </a>
  )
}
