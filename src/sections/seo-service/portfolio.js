import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Portfolio = () => {
    return (
        <>
            <section id='portfolio'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Box p={3} className="bg-primary-1" sx={{ borderRadius: "1rem" }}>
                                    <Grid container spacing={2} justifyContent="space-between">
                                        <Grid item xs={12} sm={7} style={{ position: 'relative' }}>
                                            <Box>
                                                <Typography variant='h2'>View our Technical SEO Portfolio</Typography>
                                                <Typography className='text-dark'>You will receive portfolio on your email</Typography>
                                            </Box>
                                            <Box className="portfolioForm">
                                                <form>
                                                    <Box mb={2}>
                                                        <TextField variant='outlined' label="Enter Email address" fullWidth className='bg-white text-dark' />
                                                    </Box>
                                                    <Box >
                                                        <Button className="secondary-contained-button-1">Request portfolio</Button>
                                                    </Box>
                                                </form>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={4} className='d-none d-sm-block'>
                                            <img src="/images/portfolio.png" className='img-fluid' />
                                        </Grid>
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

export default Portfolio