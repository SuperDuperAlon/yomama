import React, { useState } from 'react'
import { appService } from '../../appwrite'

const AdminFlowerCreate = ({ loadFlowers }) => {
  const [flowerData, setFlowerData] = useState({
    name: '',
    price: 20,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFlowerData({ ...flowerData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await appService.create(flowerData);
      console.log('New Flower Object:', response);
      loadFlowers()

      setFlowerData({ name: '', price: 20 });
    } catch (error) {
      console.error(error.message);
    }
  };

  console.log(flowerData);

  return (
    <div className='flex flex-col'>
      <h2>Create a New Flower</h2>
      <div>
        <form onSubmit={handleSubmit} >

          <label >
            Name:
            <input
              type="text"
              name="name"
              value={flowerData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={flowerData.price}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Create Flower</button>
        </form>
      </div>
    </div>
  );
};


export default AdminFlowerCreate