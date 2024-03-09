'use client'

import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { appService } from '@/storage/appwrite'
import { flowerService } from "@/services/flower.service"


import MainProductList_Card from '@/components/MainProductList_Card'

import { useMediaQuery } from "@/lib/useMediaQuery"
import CardFlower from "./CardFlower"



const MainProductList = () => {
    const [flowers, setFlowers] = useState<Flower[]>()

    const numOfFlowers = 8

    useEffect(() => {
        async function loadFlowers() {
            try {   
                const data = await flowerService.queryMain()
                if (data) setFlowers(data)
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
                            console.log(flower)
                            return (
                                <div key={idx}>
                                    <CardFlower flower={flower} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default MainProductList