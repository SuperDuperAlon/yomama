import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { icons } from '@/styles/assets/icons/icons'

interface Props {
    flower: Flower
}

const CardFlower = ({flower}: Props) => {

    return (
        <>
            <Link href={`/catalogue/${flower._id}`}>
                <div className="main-slider__card">
                    <Image
                        src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                        className=""
                        width={180}
                        height={120}
                        alt="flower name"
                        loading="lazy"
                    />
                    <div className="">
                        <div className="flex flex-col main-card-desc">
                            <div className="capitalize">{flower.name}</div>
                            <div className="align-bottom number">${flower.price}</div>

                        </div>
                        <div className="main-card-icons">
                            <button className="round-btn">{icons.heartIcon}</button>
                            <button className="round-btn">{icons.shoppingIcon}</button>
                        </div>
                    </div>
                </div>
            </Link>
        </>

    )
}

export default CardFlower