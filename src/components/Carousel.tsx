import 'bootstrap/dist/css/bootstrap.css'

import Carousel from 'react-bootstrap/Carousel'

interface ImageCarouselProps {
  images: string[]
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <Carousel
      style={{
        width: '45%',
        maxWidth: '45%',
        height: '300px',
        maxHeight: '300px',
      }}
    >
      {images.map((item) => {
        return (
          <Carousel.Item interval={1000} key={item}>
            <img
              className='d-block w-100'
              src={item}
              alt='Slide'
              style={{ height: '300px', maxHeight: '300px' }}
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
