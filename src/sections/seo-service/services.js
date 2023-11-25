import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Settings } from '@mui/icons-material'
import ServiceCard1 from '@/components/Cards/service-card-1'

const Services2 = () => {
    const services = [
        { id: 1, name: 'Technical SEO Services', link: '/services/technical-seo/', icon: <Settings className='text-primary-1' /> },
        { id: 2, name: 'SEO Audit Services', link: '/services/seo-audit/', icon: <Settings className='text-primary-1' /> },
        { id: 3, name: 'Local SEO Services', link: '/services/local-seo/', icon: <Settings className='text-primary-1' /> },
        { id: 4, name: 'SEO Consultation Services', link: '/services/seo-consultation-services/', icon: <Settings className='text-primary-1' /> },
        { id: 5, name: 'Wordpress SEO Services', link: '/services/wordpress-seo/', icon: <Settings className='text-primary-1' /> },
        { id: 6, name: 'YouTube SEO Services', link: '/services/youtube-seo/', icon: <Settings className='text-primary-1' /> },
        { id: 7, name: 'International SEO Services', link: '/services/international-seo/', icon: <Settings className='text-primary-1' /> },
        { id: 8, name: 'E-Commerce SEO Services', link: '/services/e-commerce-seo/', icon: <Settings className='text-primary-1' /> },
        { id: 9, name: 'On Page SEO Services', link: '/services/on-page-seo/', icon: <Settings className='text-primary-1' /> },
        { id: 10, name: 'Keyword Research and Analysis Services', link: '/services/keyword-research-analysis/', icon: <Settings className='text-primary-1' /> },
        { id: 11, name: 'Off Page SEO Services', link: '/services/off-page-seo/', icon: <Settings className='text-primary-1' /> },
        { id: 12, name: 'Topical Mapping Services', link: '/services/topical-mapping-service/', icon: <Settings className='text-primary-1' /> },
        { id: 13, name: 'White Label SEO Services', link: '/services/white-label-seo/', icon: <Settings className='text-primary-1' /> },
        { id: 14, name: 'National SEO Services', link: '/services/national-seo/', icon: <Settings className='text-primary-1' /> },

    ]

    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Typography variant='h2' className='text-white'>Our <span className='text-primary-2'>SEO Services</span></Typography>
                                <Box mt={2}>
                                    <Grid container spacing={2}>
                                        {
                                            services.map((item, index) => <Grid key={item.id} item xs={12} sm={6}>
                                                <ServiceCard1 link={item.link} icon={item.icon} serviceName={item.name} cls={services.length - 1 === index ? 'last' : ''} />
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

export default Services2