'use client'
import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const HeaderMobile = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMobileNav = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
        
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
                <div className={`absolute ease-in-out duration-300 ${isOpen ? '-translate-y-0' : '-translate-y-full'}`}>
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                </div>
            </div>
        </header>
    )
}

export default HeaderMobile