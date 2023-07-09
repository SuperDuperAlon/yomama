import React from 'react'

function Header() {
  return (
<nav className='flex justify-between'>
  <div className='flex items-center bold'>Yomama</div>
  <div>
    <ul className='flex flex-row py-8'>
      <li className='px-2'>Home</li>
      <li className='px-2'>About</li>
      <li className='px-2'>Cart</li>
      <li className='px-2'>Admin</li>
    </ul>
  </div>
</nav>
  )
}

export default Header