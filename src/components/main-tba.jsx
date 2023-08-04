import React from 'react'

import { PiShootingStar, PiMagicWand, PiHandHeart } from 'react-icons/pi'

const entries = [
    {
        icon: <PiShootingStar />,
        desc: 'Fresh flowers'
    },
    {
        icon: <PiMagicWand />,
        desc: 'Unique designs'
    },
    {
        icon: <PiHandHeart />,
        desc: 'Customer care'
    },
]

const MainTba = () => {
    return (
        <div className='index-layout'>
            <div className='flex flex-row justify-between'>
                {entries.map((entry, idx) => (
                    <div key={idx} className='main-icon-list flex flex-col'>
                        <div className=''>{entry.icon}</div>
                        <div>{entry.desc}</div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default MainTba