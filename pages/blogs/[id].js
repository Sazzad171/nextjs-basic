import React from 'react';
import { useRouter } from 'next/router';

export default function BlogDetails() {
    const router = useRouter();
    const {id} = router.query;
  return (
    <div>Blog Details id is: {id}</div>
  )
}
