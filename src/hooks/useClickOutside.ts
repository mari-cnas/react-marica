import { RefObject, useEffect } from 'react'

type BaseHookType = (
  ref: RefObject<HTMLDivElement>,
  handler: (event: MouseEvent | globalThis.TouchEvent) => void,
) => void

const useClickOutside: BaseHookType = (ref, handler) => {
  useEffect(() => {
    const listener = (event: MouseEvent | globalThis.TouchEvent): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
