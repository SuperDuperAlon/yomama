'use client'

import { useEffect, useState } from "react"

import { appService } from '@/storage/appwrite'

const Catalogue = () => {
    const [flowers, setFlowers] = useState<Flower[]>([])
    const filterBy = appService.getDefaultFilter()


    useEffect(() => {
        async function loadFlowers(filterBy: any) {
            try {
                const retrievedFlowers: any = await appService.query(filterBy.name)
                setFlowers(retrievedFlowers)
            } catch (error) {
                console.error('Error loading flowers:', error)
            }
        }
        loadFlowers(filterBy)
    }, [])

    

    if (!flowers) return <div>There are no flowers</div>
    else return (
        <section>
            {flowers.map((flower, idx) => {
                return (
                    <>
                      <div key={idx}>{flower.name}</div>
                    </>
                )

            })}
        </section>
    )
}

export default Catalogue