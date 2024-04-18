'use client'
import Loading from '@/components/Loading';
import { flowerService } from '@/services/flower.service';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

function FlowerDetails() {

  const pathname = usePathname()?.slice(-5)
  const [flower, setFlower] = useState<Flower | null>(null);

  useEffect(() => {
    const fetchFlower = async () => {
      const flower = await flowerService.get(pathname)
      setFlower(flower);
    };
    fetchFlower();
  }, []);

  console.log(flower);


  if (!flower) {
    return <div><Loading /></div>;
  }
  return (

      <div>
        <h3>test</h3>
        <h2>ID: {pathname}</h2>
        <h2>ID: {flower._id}</h2>
        <h2>ID: {flower.name}</h2>
      </div>
  );

}

export default FlowerDetails;
