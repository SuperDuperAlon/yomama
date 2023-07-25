'use client'

import { useEffect, useState } from "react";
import { flowerService } from '@/services/flower.service'
import {appService} from '../../../appwrite'

import AdminFlowerList from '@/components/admin-flower-list'
import AdminFlowerCreate from '@/components/admin-flower-create'

import Link from "next/link";

function Admin() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    loadFlowers()
  }, [])

  async function loadFlowers() {
    const retrievedFlowers = await appService.query()
    console.log(retrievedFlowers);
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
    <div className="">
      <div>
        {/*Filtering*/}
<input type="text" />


        {/*Add Task*/}
        <AdminFlowerCreate loadFlowers={loadFlowers} />
      </div>
    < AdminFlowerList flowers={flowers} onRemoveFlower={onRemoveFlower}/>
    </div>
  )
}

export default Admin