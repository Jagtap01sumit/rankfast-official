import React from 'react'
import { CommonHero, EmployeeTestimonial, Head, Vacancies, Why } from '@/sections'


const Career = () => {
    return (
        <>
            <Head
                title="Explore Exciting Career Opportunities at Rankfast | Join a Leading SEO Agency"
                description="Discover rewarding career opportunities at Rankfast, a top SEO agency renowned for its customized solutions to enhance online presence and search engine rankings. We offer roles in SEO, content marketing, link building, UI UX design, and more. Join us in our commitment to education by exploring free online courses through our search engine Coursenator. Take your career to new heights with Rankfast!"
                canonical="/career/"
                robots="index"
            />
            <CommonHero
                heading={`<span class='text-primary-1'>Rankfast</span> jobs that rank you up!`}
                tagline="Chase your dreams and build your dream career with us!"
                img1="/images/main-seo-banner.png"
            />
            <Vacancies />
            <EmployeeTestimonial />
            <Why />
        </>
    )
}

export default Career