import React from 'react';

import Meta from '@/components/Meta'

import styles from '../styles/About.module.css';

export default function about() {
  return (
    <>
        <Meta title={"About page"} />

        <section className={styles.aboutArea}>
            <h2>This is about page</h2>
        </section>
    </>
  )
}
