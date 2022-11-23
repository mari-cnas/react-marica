import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { HotelType } from 'types/HotelType'

interface IContextProps {
  hotels: HotelType[]
  loading: boolean
  fetchHotel: () => Promise<void>
}

interface IHotelProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const HotelsProvider: React.FC<IHotelProviderProps> = ({ children }) => {
  const [loading, setIsLoading] = useState(true)
  const [hotels, setHotels] = useState<HotelType[]>([])

  const fetchHotel = useCallback(async () => {
    setIsLoading(true)

    try {
      const { data } = await Api.get(`/hoteis-e-pousadas`)
      setHotels(data.collection)
      console.log('data', data.collection)
    } catch {
      console.log('Não foi possível carregar as informações')
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
          hotels,
          fetchHotel,
        }),
        [loading, hotels, fetchHotel],
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
