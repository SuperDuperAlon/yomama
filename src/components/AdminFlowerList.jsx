import React from 'react'
import Link from 'next/link'

const AdminFlowerList = ({ flowers, onRemoveFlower }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {flowers.map((flower, idx) => (
          <tr key={flower.$id}>
            <td>{idx + 1}</td>
            <td className="capitalize">{flower.name}</td>
            <td>Img</td>
            <td><button onClick={() => console.log('-1')}>-</button>${flower.price}<button onClick={() => console.log('+1')}>+</button></td>
            <td><button onClick={() => { onRemoveFlower(flower.$id) }}>Remove</button> <button><Link href={`/admin/${flower.$id}`}>Edit</Link></button></td>
            {/*Edit Task*/}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AdminFlowerList