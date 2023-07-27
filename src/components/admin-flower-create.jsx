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

  return (
    <div className='flex flex-col admin-form'>
      <h2 className='justify-around'>Create a New Flower</h2>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col'>
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