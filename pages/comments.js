import React from 'react';

import Link from 'next/link';

export default function Comments({commentList}) {
  return (
    <section className='py-3'>
      <div className="container">
        <h2 className="mb-3">All Comments</h2>
        <div className="row">
          {
            commentList.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card p-3">
                  <p>{item.body.substring(0.20)}</p>
                  <h5>User: {item.name.substring(0.50)}</h5>
                  <h6>Email: {item.email}</h6>
                  <p>
                    <Link href="/comments/[id]" as={`/comments/${item.id}`} className="btn btn-info">
                      Details
                    </Link>
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}


// static site
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=12");
  const commentList = await res.json();

  return {
    props: {
      commentList
    }
  }
}