import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryType } from 'types/CategoryType'
import { TouristicPointType } from 'types/TouristicPointType'
import { TouristicSinglePointType } from 'types/TouristicSinglePointType'

interface IContextProps {
  touristicPoints: TouristicPointType[]
  touristicPoint: TouristicSinglePointType | null
  categories: CategoryType[]
  loading: boolean
  error: string | null
  fetchTouristicPoint: (id: number) => Promise<void>
  fetchTouristicPoints: () => Promise<void>
  searchTouristicPoints: (search: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
}

interface ITouristicPointsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const TouristicPointsProvider: React.FC<
  ITouristicPointsProviderProps
> = ({ children }) => {
  const [loading, setIsLoading] = useState(true)
  const [touristicPoint, setTouristicPoint] =
    useState<TouristicSinglePointType | null>(null)
  const [touristicPoints, setTouristicPoints] = useState<TouristicPointType[]>(
    [],
  )
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchTouristicPoints = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/pontos`)
      setTouristicPoints(data.collection)
      setCategories(data.categorias)
    } catch {
      setTouristicPoints([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchTouristicPoints = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get(`/pontos/busca`, { params })
      setTouristicPoints(data.collection)
      setCategories(data.categorias)
    } catch {
      setTouristicPoints([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchTouristicPoint = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/pontos/${id}`)
      setTouristicPoint(data)
    } catch {
      setTouristicPoint(null)
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
      } = await Api.get(`/pontos/categorias/${id}`)
      setTouristicPoints(collection)
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
          touristicPoint,
          touristicPoints,
          categories,
          fetchCategory,
          fetchTouristicPoint,
          fetchTouristicPoints,
          searchTouristicPoints,
        }),
        [
          loading,
          error,
          touristicPoint,
          touristicPoints,
          categories,
          fetchCategory,
          fetchTouristicPoint,
          fetchTouristicPoints,
          searchTouristicPoints,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useTouristicPoints = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
