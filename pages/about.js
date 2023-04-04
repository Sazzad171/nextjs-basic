import React from 'react';
import Head from 'next/head';

import styles from '../styles/About.module.css';

export default function about() {
  return (
    <div>
        <Head>
            <title>About page</title>
            <meta name='keyword' content="nextjs" />
        </Head>

        <section className={styles.aboutArea}>
            <h2>This is about page</h2>
        </section>
    </div>
  )
}
