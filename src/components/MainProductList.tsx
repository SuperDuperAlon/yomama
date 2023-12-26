'use client'

import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { appService } from '@/storage/appwrite'
import { flowerService } from "@/services/flower.service"
import { icons } from '@/styles/assets/icons/icons'

import MainProductList_Card from '@/components/MainProductList_Card'

import ScreenWidthListener from "@/lib/screenSizeCalculator"

const MainProductList = () => {
    const [flowers, setFlowers] = useState<Flower[]>([])

    const screenSize = ScreenWidthListener()

    const numOfFlowers = 8
    

    useEffect(() => {
        async function loadFlowers() {
            try {
                const retrievedFlowers: any = await appService.queryTop()
                setFlowers(retrievedFlowers)
            } catch (error) {
                console.error('Error loading flowers:', error)
            }
        }
        loadFlowers()
    }, [])

    if (!flowers) return <div>There are no flowers</div>
    else return (
        <>
            <div className='main-slider-header'>
                <div className="">Our Products</div>
                <Link href="/" className="white-sqr-btn">
                    To the Catalogue
                </Link>
            </div>

            <div className="right-fill">
                <div className="main-slider">
                    {flowers.map((flower, idx) => {
                        if (idx < numOfFlowers) {
                            return (
                                <>
                                    <Link href={`/`}>
                                        <div key={idx} className="main-slider__card">
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
                    })}
                </div>
            </div>
        </>
    )
}

export default MainProductList