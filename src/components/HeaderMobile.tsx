'use client'
import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const HeaderMobile = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <header className='index-layout full'>
            <div className='flex flex-row justify-between'>
                <div className='my-4'>
                    Yomama
                </div>
                <div className='my-4'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                    <AiOutlineMenu />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderMobile