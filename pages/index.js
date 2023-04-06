import Link from 'next/link';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

import Meta from '@/components/Meta'

export default function Home({blogList}) {
  return (
    <>
      <Meta title={"Home page"} />
      <section className='py-3'>
        <div className="container">
          <div className="row">
            {
              blogList.map((item) => (
                <div className="col-md-4 mb-3" key={item.id}>
                  <div className="card p-3">
                    <h4>{item.title.substring(0.50)}</h4>
                    <p>{item.body.substring(0.20)}</p>
                    <p>
                      <Link href="/blogs/[id]" as={`/blogs/${item.id}`} className="btn btn-info">
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
    </>
  )
}

// SSR
export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
  const blogList = await res.json();

  return {
    props: {
      blogList
    }
  }
}