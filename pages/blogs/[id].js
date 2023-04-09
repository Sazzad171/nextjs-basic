import React from 'react';
// import { useRouter } from 'next/router';

export default function BlogDetails({blogDetails}) {
    // const router = useRouter();
    // const {id} = router.query;
  return (
    <section>
      <div className="container">
        <h2>{blogDetails.title}</h2>
        <p>{blogDetails.body}</p>
      </div>
    </section>
  )
}

// server side rendering
export const getServerSideProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + context.params.id);
  const blogDetails = await res.json();

  return {
    props: {
      blogDetails
    }
  }
}