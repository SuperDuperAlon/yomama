'use client'

import { useEffect, useState } from "react";
import { flowerService } from '@/services/flower.service'

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

  if (!flowers) return <div>There are no flowers</div>
  else return (
    <div className="">
      {flowers.map((flower) => (
        <div key={flower._id} className="capitalize">{flower.name} ${flower.price}
          <button onClick={() => {console.log('remove')}}>X</button>
          <button onClick={() => {console.log('edit')}}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default Admin