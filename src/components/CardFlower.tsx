import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { icons } from '@/styles/assets/icons/icons'
import ImageCmp from './ImageCmp';

interface Props {
    flower: Flower
}

const CardFlower = ({ flower }: Props) => {

    return (
        <>
            <div className="main-slider__card">
                <ImageCmp _id={flower._id}/>
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
        </>

    )
}

export default CardFlower