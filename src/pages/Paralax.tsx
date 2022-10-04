import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ParallaxText, ParallaxTextSm } from '../components/styled/components.styled'
import { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

export const Paralax = () => {
  const endOfPageRef = useRef<IParallax | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    if (endOfPageRef.current !== undefined && endOfPageRef.current) {
      endOfPageRef.current.scrollTo(3)
    }
    setIsLoaded(true)
  }, [isLoaded])

  return (
    <div>
      <Parallax pages={4} innerStyle={{ background: 'black' }} ref={endOfPageRef}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1.2}
          style={{
            backgroundImage: 'url(/static/images/paralax/moon.jpg)',
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1.9999999}
          speed={1}
          factor={4}
          style={{
            backgroundImage: 'url(/static/images/paralax/town.jpg)',
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.79, end: 2.7 }} style={{ textAlign: 'center' }}>
          <img src='/static/images/paralax/falcon.svg' height={500} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={0.05}>
          <ParallaxText>Welcome to SpaceX API</ParallaxText>
          <ParallaxTextSm>Here you can see more information about launches</ParallaxTextSm>
          <Link to='missions' style={{ textDecoration: 'none' }}>
            <ParallaxText style={{ color: '#005288' }}>MISSIONS</ParallaxText>
          </Link>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={2}>
          <ParallaxText>Scroll up to launch the rocket!</ParallaxText>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
