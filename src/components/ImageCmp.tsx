import Image from 'next/image'
import React from 'react'

const ImageCmp = () => {
    return (
        <>
            <Image
                src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                className=""
                width={180}
                height={120}
                alt="flower name"
                loading="lazy"
            />
        </>
    )
}

export default ImageCmp