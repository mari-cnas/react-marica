import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryType } from 'types/CategoryType'
import { EventSpaceSingleType } from 'types/EventSpaceSingleType'
import { EventSpaceType } from 'types/EventSpaceType'

interface IContextProps {
  eventSpaces: EventSpaceType[]
  eventSpace: EventSpaceSingleType | null
  categories: CategoryType[]
  loading: boolean
  error: string | null
  fetchEventSpace: (id: number) => Promise<void>
  fetchEventSpaces: () => Promise<void>
  searchEventSpaces: (search: string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
}

interface IEventSpacesProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const EventSpacesProvider: React.FC<IEventSpacesProviderProps> = ({
  children,
}) => {
  const [loading, setIsLoading] = useState(true)
  const [eventSpace, setEventSpace] = useState<EventSpaceSingleType | null>(
    null,
  )
  const [eventSpaces, setEventSpaces] = useState<EventSpaceType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchEventSpaces = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/espacos`)
      setEventSpaces(data.collection)
      setCategories(data.categorias)
    } catch {
      setEventSpaces([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchEventSpaces = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get(`/espacos/busca`, { params })
      setEventSpaces(data.collection)
      setCategories(data.categorias)
    } catch {
      setEventSpaces([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchEventSpace = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/espacos/${id}`)
      setEventSpace(data)
    } catch {
      setEventSpace(null)
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
      } = await Api.get(`/espacos/categorias/${id}`)
      setEventSpaces(collection)
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
          eventSpace,
          eventSpaces,
          categories,
          fetchCategory,
          fetchEventSpace,
          fetchEventSpaces,
          searchEventSpaces,
        }),
        [
          loading,
          error,
          eventSpace,
          eventSpaces,
          categories,
          fetchCategory,
          fetchEventSpace,
          fetchEventSpaces,
          searchEventSpaces,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useEventSpaces = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
