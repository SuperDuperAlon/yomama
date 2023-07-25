import React, { useState } from 'react'

const AdminFlowerCreate = () => {
        const [flowerData, setFlowerData] = useState({
          name: '',
          price: 20,
        });
      
        const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFlowerData({ ...flowerData, [name]: value });
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          // Create a new flower object
          const newFlower = {
            name: flowerData.name,
            price: parseInt(flowerData.price),
          };
      
          // Do whatever you want with the new flower object here
          console.log('New Flower Object:', newFlower);
      
          // Optionally, you can reset the form after submission
          setFlowerData({ name: '', color: '', price: 0 });
        };

        console.log(flowerData);
      
        return (
          <div>
            <h2>Create a New Flower</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={flowerData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              {/* <label>
                Color:
                <input
                  type="text"
                  name="color"
                  value={flowerData.color}
                  onChange={handleInputChange}
                  required
                />
              </label> */}
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
        );
      };


export default AdminFlowerCreate