'use client'
import ImageCmp from '@/components/ImageCmp';
import Loading from '@/components/Loading';
import { flowerService } from '@/services/flower.service';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

function FlowerDetails() {

  interface Props {
    _id: string
  }

  const pathname = usePathname()?.slice(-5)
  const [flower, setFlower] = useState<Flower | null>(null);

  useEffect(() => {
    const fetchFlower = async () => {
      const flower = await flowerService.get(pathname)
      setFlower(flower);
    };
    fetchFlower();
  }, [])


  if (!flower) {
    return <div><Loading /></div>;
  }
  return (

    <section className='flower_details_view'>
      <div className=''>
        <ImageCmp _id={flower._id} width={240} height={320} />
      </div>
      <div>
        <div className='flower_details'>
          <div>{flower.name}</div>
          <div>${flower.price}</div>
        </div>
        <div>
          <button>Add to cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </section>
  );

}

export default FlowerDetails;
