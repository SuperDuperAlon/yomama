'use client'

import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import ScreenWidthListener from "@/lib/screenSizeCalculator"

const Header = () => {
  const screenSize = ScreenWidthListener()
  const header = screenSize > 640 ? <HeaderDesktop /> : <HeaderMobile />
  return (
    <>
    {/* <HeaderDesktop /> */}
      {header}
    </>
  )
}

export default Header