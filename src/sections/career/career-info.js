import { KeyboardArrowDown, Work } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'

const CareerInfo = ({ title, jobType, location, minSalary, maxSalary }) => {
    const router = useRouter()

    return (
        <>
            <section id="careerInfo" >
                <Container maxWidth="xxl" id="careerInfoContainer">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Typography variant='h1' className='text-white' align='center' gutterBottom>{title}</Typography>
                                <Box p={2} mt={2} className="infoTable">
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Card className='bg-transparent' sx={{ borderRight: "1px solid #ffffff40" }}>
                                                <CardContent className='p-0'>
                                                    <Box className="d-flex flex-column align-items-center">
                                                        <Work className='text-white' />
                                                        <Typography variant='h3' className='text-white my-2'>Job Type</Typography>
                                                        <Typography className='text-primary-1'>{jobType}</Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Card className='bg-transparent' sx={{ borderRight: "1px solid #ffffff40" }}>
                                                <CardContent className='p-0'>
                                                    <Box className="d-flex flex-column align-items-center">
                                                        <Work className='text-white' />
                                                        <Typography variant='h3' className='text-white my-2'>Salary</Typography>
                                                        <Typography className='text-primary-1'>{minSalary} - {maxSalary}</Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Card className='bg-transparent'>
                                                <CardContent className='p-0'>
                                                    <Box className="d-flex flex-column align-items-center">
                                                        <Work className='text-white' />
                                                        <Typography variant='h3' className='text-white my-2'>Location</Typography>
                                                        <Typography className='text-primary-1'>{location}</Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
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

export default CareerInfo