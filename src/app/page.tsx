'use client'

import Image from "next/image";
import { useEffect } from "react";
import React from "react";

export default function Home() {



    return (
        <div className="full">
            <div className="h-screen relative hero">
                <Image
                    src="/images/hero-image.jpg"
                    alt="Hero"
                    fill={true}
                />
            </div>
        </div>
    )
}


