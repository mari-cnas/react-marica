import { memo } from 'react'

import { useBanners } from 'BannersContext/BannersContext'
import Carousel from 'react-bootstrap/Carousel'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const CarouselBg: React.FC<IBaseComponentProps> = () => {
  const { banners } = useBanners()

  return (
    <Carousel>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <a href={banner.url}>
            <img className="d-block w-100" src={banner.image_l} alt="First" />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
export default memo(CarouselBg)
