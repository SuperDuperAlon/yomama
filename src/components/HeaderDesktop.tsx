import Link from 'next/link'

import { icons } from '@/styles/assets/icons/icons'
import { arrays } from '@/lib/arrays'

import HeaderFilter from './HeaderFilter'
import { flowerService } from '@/services/flower.service';
import { useState } from 'react';
import { appService } from '@/storage/appwrite';

function HeaderDesktop() {


  const [filterBy, setFilterBy] = useState(appService.getDefaultFilter());

  function onSetFilter(filterBy: any) {
    setFilterBy(filterBy);
  }

  console.log(filterBy);
  

  const { headerLinks } = arrays

  return (
    <header className='index-layout'>
      <section className='top-header'>
        <button className="logo-btn">Yomama</button>
        <div className='main-input'>
          <HeaderFilter onSetFilter={onSetFilter}/>
        </div>

        <div className='header-nav'>
          <div>
            <button className='round-btn'>
              <Link href='/'>
                {icons.userIcon}
              </Link>
            </button>
          </div>
          <div>
            <button className='round-btn'>
              <Link href='/'>
                {icons.heartIcon}
              </Link>
            </button>
          </div>
          <div>
            <button className='round-btn'>
              <Link href='/'>
                {icons.shoppingIcon}
              </Link>
            </button>
          </div>
        </div>
      </section>
      <div className='header-break full'></div>
      <div className='bottom-header'>
        <ul className=''>
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