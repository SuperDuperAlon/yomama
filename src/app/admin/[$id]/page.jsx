'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { appService } from '../../../storage/appwrite'

const Edit = () => {

const [flower, setFlower] = useState(null)

  const params = useParams()

  useEffect(() => {
    loadFlower()
  }, [])

  async function loadFlower() {
    const retreivedFlower = await appService.getById(params.$id)
    setFlower(retreivedFlower)
    return retreivedFlower
  }

  if (!params.$id && flower) return <div>no id</div>
  else return (
    <div>Name {flower.name}
      <div>Dynamic ID: {params.$id}</div>;
    </div>
  )
}

export default Edit