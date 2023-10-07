import { useState, useEffect } from 'react'

export function useDelayedMessage<T>(
  data: T[],
  isLoading: boolean,
  delay = 1000
): boolean {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    let timeout: number | undefined

    if (!isLoading && (!data || data.length === 0)) {
      timeout = window.setTimeout(() => {
        setShowMessage(true)
      }, delay)
    } else {
      setShowMessage(false)
    }

    return () => {
      if (timeout !== undefined) {
        window.clearTimeout(timeout)
      }
    } // Cleanup
  }, [data, isLoading, delay])

  return showMessage
}
