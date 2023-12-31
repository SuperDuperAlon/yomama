'use client'

import { useEffect, useState } from "react";
import { flowerService } from '@/services/flower.service'
import { appService } from '../../storage/appwrite'

import AdminFlowerList from '@/components/AdminFlowerList'
import AdminFlowerCreate from '@/components/AdminFlowerCreate'

import Link from "next/link";

function Admin() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    loadFlowers()
  }, [])

  async function loadFlowers() {
    const retrievedFlowers = await appService.query()
    setFlowers(retrievedFlowers)
    return retrievedFlowers
  }

  async function onRemoveFlower(flowerId) {
    await appService.remove(flowerId)
    const newList = await appService.query()
    setFlowers(newList)
  }

  if (!flowers) return <div>There are no flowers</div>
  else return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <AdminFlowerCreate loadFlowers={loadFlowers} />
        {/*Filtering*/}
        <input type="text" />

      </div>
      <div>
      < AdminFlowerList flowers={flowers} onRemoveFlower={onRemoveFlower} />
      </div>
    </div>
  )
}

export default Admin