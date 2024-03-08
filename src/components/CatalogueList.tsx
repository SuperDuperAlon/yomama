import React, { useEffect, useRef, useState } from 'react'
import CardFlower from './CardFlower'
import { appService } from '@/storage/appwrite';

interface FlowerProps {
    flowers: Flower[];
}

const CatalogueList = ({flowers}: FlowerProps) => {

    return (
        <>
            <div className="flower-list">
                {flowers.map((flower, idx) => {
                    return (
                        <div className='card-list' key={idx}>
                            <CardFlower flower={flower} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CatalogueList