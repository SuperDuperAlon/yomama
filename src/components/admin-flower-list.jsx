import Link from 'next/link'
import React from 'react'
import { databases, Query } from "@/storage/storage";

const AdminFlowerList = ({flowers, onRemoveFlower}) => {

  const getDocuments = async() => 

  async function getDocuments() {
    const data = await databases.listDocuments(process.env.DATABASE_ID, process.env.COLLECTION_ID, [Query.equal('name')])
    return data
  }

try {
   const data = getDocuments()
   console.log(data);
} catch (err) {
  console.log(err);
}


  return (
    <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Actionsssss</th>
      </tr>
    </thead>
    <tbody>
      {flowers.map((flower, idx) => (
        <tr key={flower._id}>
          <td>{idx + 1}</td>
          <td>Img</td>
          <td>{flower._id}</td>
          <td className="capitalize">{flower.name} <button onClick={() => console.log('edit')}>edit</button></td>
          <td><button onClick={() => console.log('-1')}>-</button>${flower.price}<button onClick={() => console.log('+1')}>+</button></td>
          <td><button onClick={() => {onRemoveFlower(flower._id)}}>Remove</button> </td>
          {/*Edit Task*/}
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default AdminFlowerList