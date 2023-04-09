import React from 'react'

export default function CommentsDetails({commentItem}) {
  return (
    <section className='my-3'>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <p>{commentItem.body}</p>
            <h5>{commentItem.name}</h5>
            <h6>{commentItem.email}</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

// static props for static paths
export const getStaticProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments/" + context.params.id);
  const commentItem = await res.json();

  return {
    props: {
      commentItem
    }
  }
}

// static paths
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentList = await res.json();

  const ids = commentList.map((item) => item.id);
  const paths = ids.map((id) => (
    {
      params: {id: id.toString()}
    }
  ));

  return {
    paths,
    fallback: false
  }
}