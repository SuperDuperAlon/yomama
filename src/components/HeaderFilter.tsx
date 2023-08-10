import React from 'react'
import { icons } from '@/styles/assets/icons/icons'

const HeaderFilter = () => {
    return (
        <>
            {icons.magnifyingGlassIcon}
            <input type="text" className='' placeholder='Search' />
        </>
    )
}

export default HeaderFilter