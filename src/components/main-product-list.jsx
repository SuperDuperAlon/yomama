'use client'

import { useEffect, useState } from "react";
import { appService } from '@/storage/appwrite'
import Image from "next/image";

const MainProductList = () => {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        loadFlowers()
    }, [])

    async function loadFlowers() {
        const retrievedFlowers = await appService.query()
        setFlowers(retrievedFlowers)
        return retrievedFlowers
    }

    if (!flowers) return <div>There are no flowers</div>
    else return (
        <>
            <div className='index-layout'>
                <div className='flex justify-between'>
                    <div>Our Products</div>
                    <button>To the Catalogue</button>
                </div>
            </div>



            <div className="index-layout main-card">
                <ul className="flex justify-between">
                    {flowers.map((flower, idx) => {
                        if (idx < 4) {
                            return (
                                <li key={idx} className="flex flex-col">
                                        <Image
                                            src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                                            width={240}
                                            height={160}
                                            loading="lazy" />
                                        <div className="flex flex-row justify-between desc">
                                            <div className="capitalize">{flower.name}</div>
                                            <div className="">${flower.price}</div>
                                        </div>
                                        <div>
                                            <button>Heart</button>
                                            <button>Cart</button>
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