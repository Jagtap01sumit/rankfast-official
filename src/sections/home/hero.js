import React, { useState, useEffect } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <>
            <section id="home_hero" className='animate__animated animate__fadeIn'>
                <Container maxWidth="xxl" className='hero-container px-0 px-sm-4'>
                    <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                        <Grid item xs={12} sm={11}>
                            <Box>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} md={6} lg={6} order={{ xs: 2, md: 1 }} className='heroText'>
                                        <Box className="px-3 px-sm-0">
                                            <Typography variant='h1' className='text-white' gutterBottom style={{ textTransform: 'capitalize' }}>Innovate Transform And <Typewriter
                                                options={{
                                                    strings: ['Rankfast'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            /></Typography>
                                            <Typography className='para' gutterBottom>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</Typography>
                                            <Box mt={2}>
                                                <Button className='primary-contained-button-1' sx={{
                                                    width: '15rem',
                                                    '@media only screen and (max-width: 600px)': {
                                                        width: 'auto',
                                                    },
                                                }}>Get Started</Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6} order={{ xs: 1, md: 2 }}>
                                        <Box className="video-container">
                                            <video autoPlay loop>
                                                <source src="/videos/authBg.mp4" type="video/mp4" />
                                            </video>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Hero