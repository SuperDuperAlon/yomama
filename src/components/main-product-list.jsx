'use client'

import { useEffect, useState } from "react";
import { appService } from '@/storage/appwrite'

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
            <div className="flex flex-row">
                {flowers.map((flower, idx) => (
                    <>
                        <div>
                            <div>
                                Image
                            </div>
                            <div className="flex flex-row">
                                <div>
                                    <div key={idx}>{flower.name}</div>
                                    <div>{flower.price}</div>
                                </div>
                                <div>
                                    <button>Heart</button>
                                    <button>Cart</button>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default MainProductList