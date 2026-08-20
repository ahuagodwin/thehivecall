import { useEffect, useState } from 'react'
import { isMobile, isTablet, isDesktop, isBrowser, isSmartTV, isConsole } from 'react-device-detect'

export type DeviceCategory = 'mobile' | 'tablet' | 'desktop' | 'smarttv' | 'console' | 'unknown'

export function useDeviceCategory(): DeviceCategory {
  if (isMobile) return 'mobile'
  if (isTablet) return 'tablet'
  if (isSmartTV) return 'smarttv'
  if (isConsole) return 'console'
  if (isDesktop || isBrowser) return 'desktop'
  return 'unknown'
}

export function useViewportWidth() {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return width
}