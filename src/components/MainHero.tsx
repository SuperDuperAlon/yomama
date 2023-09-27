import Link from 'next/link'
import React from 'react'

const MainHero = () => {
    return (
        <div className="">
            <div className="hero">
                <div className='center'>
                    <div className='text-white'>buy flowers for yomama</div>
                    <button>
                        <Link href='/'>
                        To our catalogue
                        </Link>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default MainHero