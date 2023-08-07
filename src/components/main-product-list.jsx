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
            <div className="index-layout">
                {flowers.map((flower, idx) => (
                    <div key={idx} className="flex flex-col w-fit overflow-hidden">
                        <Image
                            src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                            width={360}
                            height={240}
                            loading="lazy" />

                        <div className="flex flex-row">
                            <div>
                                <div>{flower.name}</div>
                                <div>{flower.price}</div>
                            </div>
                            <div>
                                <button>Heart</button>
                                <button>Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MainProductList