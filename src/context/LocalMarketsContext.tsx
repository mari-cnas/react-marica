import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryType } from 'types/CategoryType'
import { LocalMarketSingleType } from 'types/LocalMarketSingleType'
import { LocalMarketType } from 'types/LocalMarketType'

interface IContextProps {
  localMarkets: LocalMarketType[]
  localMarket: LocalMarketSingleType | null
  categories: CategoryType[]
  loading: boolean
  error: string | null
  fetchLocalMarket: (id: number) => Promise<void>
  fetchLocalMarkets: () => Promise<void>
  searchLocalMarkets: (search: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
}

interface ILocalMarketsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const LocalMarketsProvider: React.FC<ILocalMarketsProviderProps> = ({
  children,
}) => {
  const [loading, setIsLoading] = useState(true)
  const [localMarket, setLocalMarket] = useState<LocalMarketSingleType | null>(
    null,
  )
  const [localMarkets, setLocalMarkets] = useState<LocalMarketType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchLocalMarkets = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/comercios`)
      setLocalMarkets(data.collection)
      setCategories(data.categorias)
    } catch {
      setLocalMarkets([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchLocalMarkets = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get(`/comercios/busca`, { params })
      setLocalMarkets(data.collection)
      setCategories(data.categorias)
    } catch {
      setLocalMarkets([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchLocalMarket = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/comercios/${id}`)
      setLocalMarket(data)
    } catch {
      setLocalMarket(null)
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchCategory = useCallback(async (id: number) => {
    setIsLoading(true)
    try {
      const {
        data: { categorias, collection },
      } = await Api.get(`/comercios/categorias/${id}`)
      setLocalMarkets(collection)
      setCategories(categorias)
    } catch (e) {
      // eslint-disable-next-line prettier/prettier, no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          loading,
          error,
          localMarket,
          localMarkets,
          categories,
          fetchCategory,
          fetchLocalMarket,
          fetchLocalMarkets,
          searchLocalMarkets,
        }),
        [
          loading,
          error,
          localMarket,
          localMarkets,
          categories,
          fetchCategory,
          fetchLocalMarket,
          fetchLocalMarkets,
          searchLocalMarkets,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useLocalMarkets = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
