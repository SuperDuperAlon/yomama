'use client'

import { useEffect, useState } from "react"
import { appService } from '@/storage/appwrite'
import CatalogueFilter from "@/components/CatalogueFilter";
import CatalogueList from "@/components/CatalogueList";
import { flowerService } from "@/services/flower.service";
import { CatalogueSort } from "@/components/CatalogueSort";


const Catalogue = () => {
    const [flowers, setFlowers] = useState<Flower[]>([])
    const [filterBy, setFilterBy] = useState(flowerService.getDefaultFilter())
    const [sort, setSort] = useState(flowerService.getDefaultSort())

    useEffect(() => {
        async function loadFlowers() {
            try {
                const data = await flowerService.query(filterBy, sort)
                if (data) setFlowers(data)
            } catch (error) {
                console.error('Error loading flowers:', error)
            }
        }
        loadFlowers()
    }, [filterBy, sort])

    function onSetFilter(filterBy: any): void {
        setFilterBy(filterBy);
    }
    function onSetSort(sort: any) {
        setSort(sort)
    }

    if (!flowers) return <div>There are no flowers</div>
    else return (
        <>
            <CatalogueFilter onSetFilter={onSetFilter} />
            <CatalogueSort sort={sort} onSetSort={onSetSort} />
            <CatalogueList flowers={flowers} />
        </>
    )
}

export default Catalogue