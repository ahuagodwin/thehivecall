import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToId } from '@lib/utils'

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // Give the target page a tick to mount before measuring scroll position.
      const timeout = setTimeout(() => scrollToId(location.hash), 80)
      return () => clearTimeout(timeout)
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}
