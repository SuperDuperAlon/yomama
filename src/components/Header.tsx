import Link from 'next/link'
import { icons } from '@/styles/assets/icons/icons'
import HeaderFilter from './HeaderFilter'
import { arrays } from '@/lib/arrays'

function Header() {
  
  const { headerLinks } = arrays

  return (
    <header className='index-layout full'>
      <div className='flex justify-between flex-row top-header'>
        <div className="logo">Yomama</div>
        <div className='flex flex-row main-input'>
          <HeaderFilter />
        </div>
        <div className='flex flex-row header-nav'>
          <div>
            <Link href='/'>
              {icons.userIcon}
            </Link>
          </div>
          <div>
            <Link href='/'>
              {icons.heartIcon}
            </Link>
          </div>
          <div>
            <Link href='/'>
              {icons.shoppingIcon}
            </Link>
          </div>
        </div>
      </div>
      <div className='break-line full'></div>
      <div className='bottom-header flex'>
        <ul className='flex flex-row gap-6'>
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

export default Header