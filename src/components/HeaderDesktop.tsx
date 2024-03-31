import Link from 'next/link'

import { icons } from '@/styles/assets/icons/icons'
import { arrays } from '@/lib/arrays'

import { flowerService } from '@/services/flower.service';
import { useState } from 'react';
import { appService } from '@/storage/appwrite';

function HeaderDesktop() {

  const { headerLinks } = arrays

  return (
    <header className='index-layout'>
      <section className='top-header'>
        <button className="logo-btn">Yomama</button>

        <div className='central-nav'>
        <ul className=''>
          {headerLinks.map((link, idx) => (
            <li key={idx}>
              <Link href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
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

    </header>
  )
}

export default HeaderDesktop