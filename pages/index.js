import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Meta from '@/components/Meta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Meta title={"Home page"} />
      <section>
        <h1>This is home page</h1>
      </section>
    </>
  )
}
