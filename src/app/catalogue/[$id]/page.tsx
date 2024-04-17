'use client'
import { useRouter } from 'next/router';

function MyPage() {
  const router = useRouter();
  console.log(router);
  
  const { id } = router.query;

  return (
    <div>
      <h3>test</h3>
      <h2>ID: {id}</h2>
    </div>
  );
}

export default MyPage;