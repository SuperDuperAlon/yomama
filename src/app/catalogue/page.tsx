'use client'

import { useEffect, useState } from "react"
import { appService } from '@/storage/appwrite'
import CatalogueFilter from "@/components/CatalogueFilter";
import CatalogueList from "@/components/CatalogueList";
import { flowerService } from "@/services/flower.service";


const Catalogue = () => {
    const [flowers, setFlowers] = useState<Flower[]>([])
    const [filterBy, setFilterBy] = useState(appService.getDefaultFilter())

    // useEffect(() => {
    //     async function loadFlowers() {
    //         try {
    //             const data = await appService.queryTop(filterBy)
    //             setFlowers(data!)
    //         } catch (error) {
    //             console.error('Error loading flowers:', error)
    //         }
    //     }
    //     loadFlowers()
    // }, [filterBy])

    useEffect(() => {
        async function loadFlowers() {
            try {
                const data = await flowerService.query()
                if (data) setFlowers(data)
            } catch (error) {
                console.error('Error loading flowers:', error)
            }
        }
        loadFlowers()
    }, [])

    function onSetFilter(filterBy: any): void {
        setFilterBy(filterBy);
    }

    if (!flowers) return <div>There are no flowers</div>
    else return (
        <>
            <CatalogueFilter onSetFilter={onSetFilter} />
            <CatalogueList flowers={flowers} />
        </>
    )
}

export default Catalogue