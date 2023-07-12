'use client'

import { useEffect, useState } from "react";
import { flowerService } from '@/services/flower.service'
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

  function onRemoveFlower(flowerId) {
    console.log(flowerId);
    flowerService.remove(flowerId)
    setFlowers(flowers)
    loadFlowers()
  }

  if (!flowers) return <div>There are no flowers</div>
  else return (
    <div className="">
      <div>


        {/*Filtering*/}
<input type="text" />


        {/*Add Task*/}
        <button>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th colSpan="2">Actionsssss</th>
          </tr>
        </thead>
        <tbody>
          {flowers.map((flower, idx) => (
            <tr key={flower._id}>
              <td>{idx + 1}</td>
              <td>Img</td>
              <td>{flower._id}</td>
              <td>{flower.name}</td>
              <td>{flower.price}</td>
              <td><button onClick={() => {onRemoveFlower(flower._id)}}>Remove</button> </td>
              {/*Edit Task*/}
              <td><button> <Link href="/admin/edit">Edit</Link> </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admin