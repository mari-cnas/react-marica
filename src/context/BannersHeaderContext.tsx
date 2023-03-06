import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { BannerType } from 'types/BannerType'

interface IContextProps {
  banners: BannerType[]
  error: string | null
  loading: boolean
  fetchBanners: () => Promise<void>
}

interface IBannersProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const BannersHeaderProvider: React.FC<IBannersProviderProps> = ({
  children,
}) => {
  const [loading, setIsLoading] = useState(true)
  const [banners, setBanners] = useState<BannerType[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchBanners = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await Api.get(`/banners`)
      setBanners(response.data)
    } catch {
      // eslint-disable-next-line no-console
      setError('Não foi possível carregar os banners')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          loading,
          banners,
          error,
          fetchBanners,
        }),
        [loading, banners, error, fetchBanners],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useHeaderBanners = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
