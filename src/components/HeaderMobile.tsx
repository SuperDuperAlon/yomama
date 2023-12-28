'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { arrays } from '@/lib/arrays'

const HeaderMobile = () => {

    const { headerLinks } = arrays

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMobileNav = () => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }

    return (
        <header className='index-layout full'>
            <div className='mobile_header__container'>
                <div>
                    Yomama
                </div>
                <div>
                    <button onClick={toggleMobileNav}>
                        <AiOutlineMenu />
                    </button>
                </div>
                <div className={`mobile_header__menu ${isOpen ? 'menu_open' : 'menu_close'}`}>
                    <button onClick={toggleMobileNav}>X</button>
                    <div>
                        <ul className='mobile_header__list'>
                            {headerLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href='/'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderMobile