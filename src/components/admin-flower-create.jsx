import React, { useState } from 'react'
import {appService} from '../../appwrite'

const AdminFlowerCreate = () => {
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
            // Call the asynchronous function passing the flowerData as props
            const response = await appService.create(flowerData);
            console.log('New Flower Object:', response);
      
            // Optionally, you can reset the form after successful submission
            setFlowerData({ name: '', price: 0 });
          } catch (error) {
            console.error(error.message);
          }
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