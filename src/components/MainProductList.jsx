'use client'

import { useEffect, useState } from "react";
import { appService } from '@/storage/appwrite'
import { icons } from '@/styles/assets/icons/icons'
import Image from "next/image";
import ScreenWidthListener from "@/lib/screenSizeCalculator";

const MainProductList = () => {
    const [flowers, setFlowers] = useState([])

    const screenSize = ScreenWidthListener()
    const numOfFlowers = screenSize > 890 ? 4 : 3
    
    useEffect(() => {
        async function loadFlowers() {
            try {
              const retrievedFlowers = await appService.query();
              setFlowers(retrievedFlowers);
            } catch (error) {
              console.error('Error loading flowers:', error);
            }
        }
        loadFlowers();
    }, []);

    if (!flowers) return <div>There are no flowers</div>
    else return (
        <>
            <div className='index-layout'>
                <div className='mb-4 flex justify-between'>
                    <div className="flex items-center">Our Products</div>
                    <a href="/" className="white-sqr-btn">
                        <button>To the Catalogue</button>
                    </a>
                </div>
            </div>

            <div className="index-layout main-card">
                <ul className="flex justify-between gap-x-4">
                    {flowers.map((flower, idx) => {
                        if (idx < numOfFlowers) {
                            return (
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
                                            <button>{icons.heartIcon}</button>
                                            <button>{icons.shoppingIcon}</button>
                                        </div>
                                    </div>
                                </li>)
                        }
                    })}
                </ul>
            </div>
        </>
    )
}

export default MainProductList