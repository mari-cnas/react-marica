import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { BannerType } from 'types/BannerType'

interface IContextProps {
  banners: BannerType[]
  loading: boolean
  fetchBanners: () => Promise<void>
}

interface IBannersProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const BannersProvider: React.FC<IBannersProviderProps> = ({
  children,
}) => {
  const [loading, setIsLoading] = useState(true)
  const [banners, setBanners] = useState<BannerType[]>([])

  const fetchBanners = useCallback(async () => {
    setIsLoading(true)

    try {
      const { data } = await Api.get(`/banners`)
      setBanners(data)
    } catch {
      console.log('Não foi possível carregar as informações')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchBanners()
  }, [fetchBanners])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          loading,
          banners,
          fetchBanners,
        }),
        [loading, banners, fetchBanners],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useBanners = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
