import Link from 'next/link'

import { icons } from '@/styles/assets/icons/icons'
import { arrays } from '@/lib/arrays'

import HeaderFilter from './HeaderFilter'

function HeaderDesktop() {

  const { headerLinks } = arrays

  return (
    <header className='index-layout full'>
      <div className='flex justify-between flex-row top-header'>
        <div className="logo">
          <Link href='/'>Yomama</Link>
        </div>
        <div className='flex flex-row main-input'>
          <HeaderFilter />
        </div>
        <div className='flex flex-row header-nav'>
          <div>
            <Link href='/'>
              <button className='round-btn'>
                {icons.userIcon}
              </button>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <button className='round-btn'>
                {icons.heartIcon}
              </button>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <button className='round-btn'>
                {icons.shoppingIcon}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='break-line full'></div>
      <div className='bottom-header flex'>
        <ul className='flex flex-row'>
          {headerLinks.map((link, idx) => (
            <li key={idx}>
              <Link href='/'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default HeaderDesktop