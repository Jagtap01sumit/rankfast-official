import React from 'react'
import { useRouter } from 'next/router'
import { ArrowBackIos } from '@mui/icons-material'
import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material'


const SingleBanner = ({ title }) => {
    const router = useRouter()
    return (
        <>
            <section style={{ marginTop: "4.5rem" }} className='single-case' >
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={10}>
                            <Box py={2}>
                                <Box>
                                    <Button className='text-white' onClick={() => router.push('/case-study/')}><ArrowBackIos /> Case Studies</Button>
                                </Box>
                                <Box mt={2} className="d-flex align-items-center">
                                    <Chip label="Case Study" variant='filled' className='text-white bg-secondary-2 me-3' />
                                    <Typography>5 min Read</Typography>
                                </Box>
                                <Box mt={5}>
                                    <Typography variant='h1' className='text-white'>{title}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default SingleBanner