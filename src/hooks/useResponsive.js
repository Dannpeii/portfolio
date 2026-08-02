import { useEffect, useState } from 'react'

// Mirrors lib/core/ultils/responsive.dart thresholds exactly:
// mobile < 600, tablet 600-1199, desktop >= 1200
export function useResponsive() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  )

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isMobile = width < 600
  const isTablet = width >= 600 && width < 1200
  const isDesktop = width >= 1200

  return { width, isMobile, isTablet, isDesktop }
}
