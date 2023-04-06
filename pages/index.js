import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Meta from '@/components/Meta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Meta title={"Home page"} />
      <section className='py-3'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h4>test</h4>
                <p>lorem</p>
                <p>
                  <a href="#">Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
