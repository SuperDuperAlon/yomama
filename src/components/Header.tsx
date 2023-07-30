import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='index-layout full'>
      <div className='flex justify-between flex-row top-header'>
        <div className="logo">Yomama</div>
        <div>
          <input type="text" className='' />
        </div>
        <div className='flex flex-row'>
          <div>user button</div>
          <div>Fav</div>
          <div>Cart</div>
        </div>
      </div>
      <div className='break-line full'></div>
      <div className='bottom-header'>
        <div>
          <div>Catalog</div>
          <div>About</div>
          <div>Contact</div>
        </div>
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