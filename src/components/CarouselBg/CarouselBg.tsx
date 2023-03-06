import { memo, useEffect } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import { useHeaderBanners } from 'context/BannersHeaderContext'

interface ICarouselBgProps {
  children?: React.ReactNode
}

const CarouselBg: React.FC<ICarouselBgProps> = () => {
  const { banners, loading, fetchBanners } = useHeaderBanners()

  useEffect(() => {
    fetchBanners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading && (
        <div className="d-flex flex-column my-5">
          <div className="d-flex flex-column align-self-center">
            <p>Carregando informações...</p>
          </div>
        </div>
      )}
      {!loading && (
        <Carousel>
          {banners.map((banner) => (
            <Carousel.Item key={banner.id}>
              <a href={banner.url} target="_blank" rel="noreferrer">
                <img
                  className="d-none d-md-block w-100"
                  src={banner.image_l}
                  alt={`Banner-${banner.id}/`}
                />
              </a>
              <a href={banner.url} target="_blank" rel="noreferrer">
                <img
                  className="d-block d-md-none w-100"
                  src={banner.image_s}
                  alt={`Banner-${banner.id}/`}
                />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      {!loading && banners.length === 0 && <h2>Nenhum resultado encontrado</h2>}
    </>
  )
}
export default memo(CarouselBg)
