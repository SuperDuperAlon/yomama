'use client'

import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { appService } from '@/storage/appwrite'
import { icons } from '@/styles/assets/icons/icons'

import ScreenWidthListener from "@/lib/screenSizeCalculator"

const MainProductList = () => {
    const [flowers, setFlowers] = useState<Flower[]>([])

    const screenSize = ScreenWidthListener()
    const numOfFlowers = screenSize > 890 ? 4 : 3

    useEffect(() => {
        async function loadFlowers() {
            try {
                const retrievedFlowers: any = await appService.query()
                console.log(typeof retrievedFlowers);

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
            <div className='index-layout '>
                <div className='mb-4 hidden md:flex justify-between'>
                    <div className="flex items-center">Our Products</div>
                    <Link href="/" className="white-sqr-btn">
                        <button>To the Catalogue</button>
                    </Link>
                </div>
            </div>

            <div className="index-layout main-card">
                <ul className="flex justify-between gap-x-4">
                    {flowers.map((flower, idx) => {
                        if (idx < numOfFlowers) {
                            return (
                                <>
                                    <Link href='/'>
                                        <li key={idx} className="flex flex-col">
                                            <Image
                                                src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                                                width={180}
                                                height={120}
                                                alt="flower name"
                                                loading="lazy"
                                                layout="responsive"
                                            />
                                            <div className="flex flex-row justify-between py-4">
                                                <div className="flex flex-col main-card-desc">
                                                    <div className="capitalize">{flower.name}</div>
                                                    <div className="align-bottom number">${flower.price}</div>

                                                </div>
                                                <div className="main-card-icons">
                                                    <button className="round-btn">{icons.heartIcon}</button>
                                                    <button className="round-btn">{icons.shoppingIcon}</button>
                                                </div>
                                            </div>
                                        </li>
                                    </Link>
                                </>)
                        }
                    })}
                </ul>
            </div>
        </>
    )
}

export default MainProductList