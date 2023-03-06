import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryType } from 'types/CategoryType'
import { RestaurantSingleType } from 'types/RestaurantSingleType'
import { RestaurantType } from 'types/RestaurantType'

interface IContextProps {
  restaurants: RestaurantType[]
  restaurant: RestaurantSingleType | null
  categories: CategoryType[]
  loading: boolean
  error: string | null
  fetchRestaurant: (id: number) => Promise<void>
  fetchRestaurants: () => Promise<void>
  searchRestaurants: (search: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
}

interface IRestaurantsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const RestaurantsProvider: React.FC<IRestaurantsProviderProps> = ({
  children,
}) => {
  const [loading, setIsLoading] = useState(true)
  const [restaurant, setRestaurant] = useState<RestaurantSingleType | null>(
    null,
  )
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchRestaurants = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/restaurantes`)
      setRestaurants(data.collection)
      setCategories(data.categorias)
    } catch {
      setRestaurants([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchRestaurants = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get(`/restaurantes/busca`, { params })
      setRestaurants(data.collection)
      setCategories(data.categorias)
    } catch {
      setRestaurants([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchRestaurant = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/restaurantes/${id}`)
      setRestaurant(data)
    } catch {
      setRestaurant(null)
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
      } = await Api.get(`/restaurantes/categorias/${id}`)
      setRestaurants(collection)
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
          restaurant,
          restaurants,
          categories,
          fetchCategory,
          fetchRestaurant,
          fetchRestaurants,
          searchRestaurants,
        }),
        [
          loading,
          error,
          restaurant,
          restaurants,
          categories,
          fetchCategory,
          fetchRestaurant,
          fetchRestaurants,
          searchRestaurants,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useRestaurants = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
