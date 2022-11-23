import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { AboutType } from 'types/AboutType'

interface IContextProps {
  about: AboutType | undefined
  loading: boolean
  fetchAbout: () => Promise<void>
}

interface IAboutProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const AboutProvider: React.FC<IAboutProviderProps> = ({ children }) => {
  const [loading, setIsLoading] = useState(true)
  const [about, setAbout] = useState<AboutType | undefined>(undefined)

  const fetchAbout = useCallback(async () => {
    setIsLoading(true)

    try {
      const { data } = await Api.get(`/apps/get`)
      setAbout(data)
    } catch {
      console.log('Não foi possível carregar as informações')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchAbout()
  }, [fetchAbout])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          loading,
          about,
          fetchAbout,
        }),
        [loading, about, fetchAbout],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useAbout = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
