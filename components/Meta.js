import React from 'react';

import Head from 'next/head';

export default function Meta({title, description, keywords}) {
  return (
    <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
    </Head>
  )
}

Meta.defaultProps = {
    title: "Next App",
    description: "Nextjs practise",
    keywords: "nextjs, sazzad"
}