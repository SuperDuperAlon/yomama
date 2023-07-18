import Link from 'next/link'
import React from 'react'

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
        <th colSpan="2">Actionsssss</th>
      </tr>
    </thead>
    <tbody>
      {flowers.map((flower, idx) => (
        <tr key={flower._id}>
          <td>{idx + 1}</td>
          <td>Img</td>
          <td>{flower._id}</td>
          <td className="capitalize">{flower.name}</td>
          <td>${flower.price}</td>
          <td><button onClick={() => {onRemoveFlower(flower._id)}}>Remove</button> </td>
          {/*Edit Task*/}
          <td><button> <Link href="/admin/edit">Edit</Link> </button></td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default AdminFlowerList