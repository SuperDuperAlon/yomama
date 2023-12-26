'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { arrays } from '@/lib/arrays'

const HeaderMobile = () => {

    const { headerLinks } = arrays

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMobileNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='index-layout full'>
            <div className='flex flex-row justify-between'>
                <div className='my-4'>
                    Yomama
                </div>
                <div className='my-4'>
                    <button onClick={toggleMobileNav}>
                        <AiOutlineMenu />
                    </button>
                </div>
                <div className={`absolute left-0 bg-white h-screen w-screen ease-in-out duration-300 ${isOpen ? '-translate-y-0' : '-translate-y-full'}`}>
                    <button className='absolute right-10 top-4 text-xl' onClick={toggleMobileNav}>X</button>
                    <div className='flex h-full'>
                        <ul className='flex flex-col clean-list justify-center items-center w-full gap-y-1.5 text-2xl'>
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