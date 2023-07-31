import Link from 'next/link'
import React from 'react'
import { icons } from '@/styles/assets/icons/icons'
// import {AiOutlineUser, AiOutlineHeart, AiOutlineShopping} from 'react-icons/ai'

function Header() {

  const { userIcon, shoppingIcon, heartIcon, magnifyingGlassIcon } = icons

  return (
    <header className='index-layout full'>
      <div className='flex justify-between flex-row top-header'>
        <div className="logo">Yomama</div>
        <div className='flex flex-row main-input'>
        {magnifyingGlassIcon}
        <input type="text" className='' placeholder='Search'/>
        </div>
        <div className='flex flex-row header-nav'>
          <div>{userIcon}</div>
          <div>{shoppingIcon}</div>
          <div>{heartIcon}</div>
        </div>
      </div>
      <div className='break-line full'></div>
      <div className='bottom-header flex'>
        <ul className='flex flex-row'>
          <li>Catalog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

    </header>

    // <nav className='index-layout full' >
    //   <div className='flex flex-row justify-between' >
    //     <div className='flex items-center bold logo text-3xl'>Yomama</div>
    //     <div>
    //       <ul className='flex flex-row py-8'>
    //         <li className='px-2'><Link href='/'>Home</Link></li>
    //         <li className='px-2'><Link href='#'>About</Link></li>
    //         <li className='px-2'><Link href='#'>Cart</Link></li>
    //         <li className='px-2'><Link href='/admin'>Admin</Link></li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Header