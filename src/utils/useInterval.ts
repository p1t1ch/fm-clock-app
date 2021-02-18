import { useEffect, useRef } from 'react'

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void | null>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current && savedCallback.current()
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
