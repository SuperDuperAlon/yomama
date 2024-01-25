'use client'

import { useEffect, useState } from "react"
import { appService } from '@/storage/appwrite'
import CardFlower from "@/components/CardFlower"

const Catalogue = () => {
    const [flowers, setFlowers] = useState<Flower[]>([])
    // const filterBy = appService.getDefaultFilter()


    useEffect(() => {
        async function loadFlowers() {
            try {
                const data = await appService.queryTop()
                setFlowers(data!)
            } catch (error) {
                console.error('Error loading flowers:', error)
            }
        }
        loadFlowers()
    }, [])



    if (!flowers) return <div>There are no flowers</div>
    else return (
        <>
            <section>
                {flowers.map((flower, idx) => {
                    return (
                        <div className='card-list' key={idx}>
                            <CardFlower flower={flower} />
                        </div>
                    )

                })}
            </section>
        </>
    )
}

export default Catalogue