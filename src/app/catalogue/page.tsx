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

    function onSetFilter(filterBy: FilterBy): void {
        setFilterBy(filterBy);
    }
    function onSetSort(sort: SortBy) {
        setSort(sort)
    }

    if (!flowers) return <section>There are no flowers</section>
    else return (
        <section className="catalogue">
            <div className="catalogue-header">
                <CatalogueFilter onSetFilter={onSetFilter} />
                <CatalogueSort sort={sort} onSetSort={onSetSort} />
            </div>
            <CatalogueList flowers={flowers} />
        </section>
    )
}

export default Catalogue