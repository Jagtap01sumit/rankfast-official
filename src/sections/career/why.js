import { WhyWorkCard } from '@/components'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Why = () => {
    const why = [
        { title: 'Company Culture', desc: "At Rankfast by COURSENATOR, we understand the importance of a dynamic work culture that goes beyond the work at hand. Our company culture is all about creating an environment that fosters your mental well-being. We think that an enthusiastic and engaged team member is entitled to drive outstanding results. By fostering work-life balance and encouraging a fun pleasant workplace, we ensure that your time with our company is professionally rewarding and personally delightful.", img: '/images/why2.png' },
        { title: 'Innovative Atmosphere', desc: "We encourage an innovative environment that thrives on pushing boundaries and staying ahead of this ever-growing digital marketing game. To maintain our clients at the forefront of their industries, we constantly challenge the existing quo and actively seek out cutting-edge tactics and solutions. Great ideas can arise from anywhere, we believe. We don't just follow established norms; we attempt to create them.", img: '/images/why1.png' },
        { title: 'Growth Opportunities', desc: "We are committed to boosting your professional journey. We firmly believe that each team member's potential is limitless. When you join our team, you'll have a clear roadmap explaining the steps to ascending the professional ladder. We are glad many of our team members started where you are now. As your performance gets better, you can take on more responsibility to manage projects to propel your career to new heights.", img: '/images/why1.png' },
        { title: 'Client Impact', desc: "Imagine yourself being at the front line of business growth. Along with experts from various fields, you will develop techniques to boost our client's online presence. Every action you do within our complement company immediately impacts the businesses we serve. The pride of knowing that your work contributes to our clients' success in the competitive digital landscape is priceless. You'll feel a strong sense of fulfilment as you see firms thrive and achieve their objectives, knowing that your contributions were critical to their success.", img: '/images/why1.png' }
    ]
    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Typography variant='h2' className='text-white' align="center">Why work with us?</Typography>
                                <Box mt={4}>
                                    <Grid container spacing={6}>
                                        {
                                            why.map(item => <Grid item xs={12} sm={6} key={item.title}>
                                                <WhyWorkCard title={item.title} desc={item.desc} img={item.img} />
                                            </Grid>)
                                        }
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Why