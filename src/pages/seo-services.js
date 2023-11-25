import { Audit, BigProjects, CommonHero, Head, OurClient, Service2, Testimonial } from '@/sections'
import React from 'react'

const SEOServices = () => {
    return (
        <>
            <Head />
            <CommonHero
                heading={`Harness the power of SEO for <span class='text-primary-2'>Unrivalled Growth</span>`} img1="/images/main-seo-banner.png "
                tagline={'Boost your online presence with Top-notch technical SEO solutions'}
                btnText1={'Jump start your growth today!'}
            />
            <OurClient />
            <BigProjects />
            <Service2 />
            <Audit />
            <Testimonial />
        </>
    )
}

export default SEOServices