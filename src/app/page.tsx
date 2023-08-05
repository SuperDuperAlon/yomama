'use client'

import Image from "next/image";
import { useEffect } from "react";
import React from "react";
import Hero from '@/components/main-hero'
import MainIcons from '@/components/main-icons'
import MainProductList from '@/components/main-product-list'

export default function Home() {



    return (
        <>
            < Hero />
            < MainIcons />
            < MainProductList />
        </>
    )
}


