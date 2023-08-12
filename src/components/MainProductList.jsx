'use client'

import { useEffect, useState } from "react";
import { appService } from '@/storage/appwrite'
import { icons } from '@/styles/assets/icons/icons'
import Image from "next/image";

const MainProductList = () => {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        async function loadFlowers() {
            try {
              const retrievedFlowers = await appService.query('rose');
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
                <ul className="flex justify-between ">
                    {flowers.map((flower, idx) => {
                        if (idx < 4) {
                            return (
                                <li key={idx} className="flex flex-col">
                                    <Image
                                        src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                                        width={240}
                                        height={160}
                                        alt="flower name"
                                        loading="lazy" />
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