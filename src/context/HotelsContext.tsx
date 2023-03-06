import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryType } from 'types/CategoryType'
import { HotelSingleType } from 'types/HotelSingleType'
import { HotelType } from 'types/HotelType'

interface IContextProps {
  hotels: HotelType[]
  hotel: HotelSingleType | null
  categories: CategoryType[]
  loading: boolean
  error: string | null
  fetchHotel: (id: number) => Promise<void>
  fetchHotels: () => Promise<void>
  searchHotels: (search: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
}

interface IHotelProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const HotelsProvider: React.FC<IHotelProviderProps> = ({ children }) => {
  const [loading, setIsLoading] = useState(true)
  const [hotel, setHotel] = useState<HotelSingleType | null>(null)
  const [hotels, setHotels] = useState<HotelType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchHotels = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/hoteis-e-pousadas`)
      setHotels(data.collection)
      setCategories(data.categorias)
    } catch {
      setHotels([])
      setError('Não foi possível carregar as informações')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchHotels = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get(`/hoteis-e-pousadas/busca`, { params })
      setHotels(data.collection)
      setCategories(data.categorias)
    } catch {
      setHotels([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchHotel = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/hoteis-e-pousadas/${id}`)
      setHotel(data)
    } catch {
      setHotel(null)
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
      } = await Api.get(`/hoteis-e-pousadas/categorias/${id}`)
      setHotels(collection)
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
          hotel,
          hotels,
          categories,
          fetchCategory,
          fetchHotel,
          fetchHotels,
          searchHotels,
        }),
        [
          loading,
          error,
          hotel,
          hotels,
          categories,
          fetchCategory,
          fetchHotel,
          fetchHotels,
          searchHotels,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useHotels = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
