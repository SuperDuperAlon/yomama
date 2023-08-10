'use client'

import { useState } from 'react'
import { icons } from '@/styles/assets/icons/icons'

const HeaderFilter = () => {
    const [filter, setFilter] = useState('');

    console.log(filter);
    
    return (
        <>
            {icons.magnifyingGlassIcon}
            <input
                type="text"
                className=''
                placeholder='Search'
                onChange={(e) => setFilter(e.target.value)} />
        </>
    )
}

export default HeaderFilter