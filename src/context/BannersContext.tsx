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
  error: string | null
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
  const [error, setError] = useState<string | null>(null)

  const fetchBanners = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/banners`)
      setBanners(data)
    } catch {
      setError('Não foi possível carregar')
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
          error,
        }),
        [loading, banners, error, fetchBanners],
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
