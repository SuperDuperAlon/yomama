'use client'

import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const Edit = () => {

  const params = useParams()

  // useEffect(() => {
  //   const id = params.$id
  // }, [])

  
  if (!params.$id) return <div>no id</div>
  else return (
    <div>Edit
      <div>Dynamic ID: {params.$id}</div>;
    </div>
  )
}

export default Edit