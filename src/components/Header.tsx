import Link from 'next/link'
import React from 'react'
import { icons } from '@/styles/assets/icons/icons'

function Header() {

  const links = [
    { name: 'Products' },
    { name: 'About' },
    { name: 'Workshop' },
    { name: 'Contact' }
  ]

  return (
    <header className='index-layout full'>
      <div className='flex justify-between flex-row top-header'>
        <div className="logo">Yomama</div>
        <div className='flex flex-row main-input'>
          {icons.magnifyingGlassIcon}
          <input type="text" className='' placeholder='Search' />
        </div>
        <div className='flex flex-row header-nav'>
          <div>{icons.userIcon}</div>
          <div>{icons.shoppingIcon}</div>
          <div>{icons.heartIcon}</div>
        </div>
      </div>
      <div className='break-line full'></div>
      <div className='bottom-header flex'>
        <ul className='flex flex-row gap-6'>
          {links.map((link, idx) => (
            <li key={idx}>{link.name}</li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header