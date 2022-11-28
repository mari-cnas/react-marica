import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CategoryType } from 'types/CategoryType'
import { EventSingleType } from 'types/EventSingleType'
import { EventType } from 'types/EventType'

interface IContextProps {
  events: EventType[]
  event: EventSingleType | null
  categories: CategoryType[]
  loading: boolean
  error: string | null
  fetchEvent: (id: number) => Promise<void>
  fetchEvents: () => Promise<void>
  searchEvents: (search: string) => Promise<void>
}

interface IEventsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const EventsProvider: React.FC<IEventsProviderProps> = ({
  children,
}) => {
  const [loading, setIsLoading] = useState(true)
  const [event, setEvent] = useState<EventSingleType | null>(null)
  const [events, setEvents] = useState<EventType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchEvents = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/eventos`)
      setEvents(data.collection)
      setCategories(data.categorias)
    } catch {
      setEvents([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchEvents = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)
    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get(`/eventos/busca`, { params })
      setEvents(data.collection)
      setCategories(data.categorias)
    } catch {
      setEvents([])
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchEvent = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/eventos/${id}`)
      setEvent(data)
    } catch {
      setEvent(null)
      setError('Não foi possível carregar')
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
          error,
          event,
          events,
          categories,
          fetchEvent,
          fetchEvents,
          searchEvents,
        }),
        [
          loading,
          error,
          event,
          events,
          categories,
          fetchEvent,
          fetchEvents,
          searchEvents,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useEvents = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
