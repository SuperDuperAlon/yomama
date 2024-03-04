import Image from 'next/image';
import React from 'react'

interface PropsCard {
    flower: Flower;
}

const CardFlower = (flower: PropsCard) => {
    return (
        <>
            <div>
                <Image
                    src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                    className=""
                    width={180}
                    height={120}
                    alt="flower name"
                    loading="lazy"
                />
                <div>
                    {flower.flower.name}
                </div>
                <div>
                    {flower.flower.price}
                </div>

            </div>
        </>

    )
}

export default CardFlower