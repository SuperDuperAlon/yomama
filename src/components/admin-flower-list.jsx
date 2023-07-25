import Link from 'next/link'
import React, { useEffect } from 'react'
// import {getData} from '@/lib/getdata'


const AdminFlowerList = ({flowers, onRemoveFlower}) => {
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
        <tr key={flower.$id}>
          <td>{idx + 1}</td>
          <td>Img</td>
          <td>{flower.$id}</td>
          <td className="capitalize">{flower.name} <button onClick={() => console.log('edit')}>edit</button></td>
          <td><button onClick={() => console.log('-1')}>-</button>${flower.price}<button onClick={() => console.log('+1')}>+</button></td>
          <td><button onClick={() => {onRemoveFlower(flower.$id)}}>Remove</button> </td>
          {/*Edit Task*/}
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default AdminFlowerList