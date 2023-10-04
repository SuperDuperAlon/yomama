'use client'

import { useState, useEffect } from 'react'

const ScreenWidthListener = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return screenWidth
}

export default ScreenWidthListener
