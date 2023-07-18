'use client'

import { useEffect, useState } from "react";
import { flowerService } from '@/services/flower.service'

import AdminFlowerList from '@/components/admin-flower-list'

import Link from "next/link";

function Admin() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    loadFlowers()
  }, [])

  function loadFlowers() {
    const retrievedFlowers = flowerService.query()
    setFlowers(retrievedFlowers)
    return retrievedFlowers
  }

 async function onRemoveFlower(flowerId) {
    await flowerService.remove(flowerId)
    const newList = await flowerService.query()
    setFlowers(newList)
  }

  if (!flowers) return <div>There are no flowers</div>
  else return (
    <div className="">
      <div>


        {/*Filtering*/}
<input type="text" />


        {/*Add Task*/}
        <button onClick={() => console.log('add new flower')}>Add</button>
      </div>
    < AdminFlowerList flowers={flowers} onRemoveFlower={onRemoveFlower}/>
    </div>
  )
}

export default Admin