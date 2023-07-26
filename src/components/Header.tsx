import Link from 'next/link'
import React from 'react'

function Header() {
  return (

    <nav className='bg-blue-100 index-layout full' >
      <div className='flex flex-row justify-between' >
        <div className='flex items-center bold logo text-3xl'>Yomama</div>
        <div>
          <ul className='flex flex-row py-8'>
            <li className='px-2'><Link href='/'>Home</Link></li>
            <li className='px-2'><Link href='#'>About</Link></li>
            <li className='px-2'><Link href='#'>Cart</Link></li>
            <li className='px-2'><Link href='/admin'>Admin</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header