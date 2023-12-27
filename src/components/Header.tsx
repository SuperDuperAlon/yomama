'use client'

import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import { useMediaQuery } from "@/lib/useMediaQuery"

const Header = () => {
  const isBreakpoint = useMediaQuery(768)
  return (
    <>
      <div>
        {isBreakpoint ? (
          <div>
            <HeaderMobile />
          </div>
        ) : (
          <div>
            <HeaderDesktop />
          </div>
        )}
      </div>
    </>
  )
}

export default Header