'use client'

import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import ScreenWidthListener from "@/lib/screenSizeCalculator"

import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width: any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

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