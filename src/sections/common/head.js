import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const index = ({ title, description, keywords, robots, canonical }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="robots" content={robots} />
                <link rel="canonical" href={canonical} />
            </Head>
        </>
    )
}

export default index