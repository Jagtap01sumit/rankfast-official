import { Portabletext } from '@/components'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

const Content = ({ caseStudy }) => {
    const [data, setData] = useState({
        Email: "", Website: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newData = { ...data, page: 'footer' }
        try {
            const response = await fetch('/api/send-mail', { method: "POST", body: JSON.stringify({ data: newData }) })
            const { success } = await response.json()
            if (success) {
                setData({ Email: "", Website: "" })
                toast.success('Form submitted successfully.')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={9}>
                                        {
                                            caseStudy?.about && <Box className='mt-5'>
                                                <Box>
                                                    <Typography variant='h2' className='text-white' gutterBottom>{caseStudy?.about?.sectionHeading || ''}</Typography>
                                                    {
                                                        caseStudy?.about?.content && <Portabletext content={caseStudy.about.content} />
                                                    }
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            caseStudy?.analysis && <Box className='mt-5'>
                                                <Box>
                                                    <Typography variant='h2' className='text-white' gutterBottom>{caseStudy?.analysis?.sectionHeading || ''}</Typography>
                                                    {
                                                        caseStudy?.analysis?.content &&
                                                        <Portabletext content={caseStudy.analysis.content} />
                                                    }
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            caseStudy?.problem && <Box className='mt-5'>
                                                <Box>
                                                    <Typography variant='h2' className='text-white' gutterBottom>{caseStudy?.problem?.sectionHeading || ''}</Typography>
                                                    {
                                                        caseStudy?.problem?.content &&
                                                        <Portabletext content={caseStudy.problem.content} />
                                                    }
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            caseStudy?.solution && <Box className='mt-5'>
                                                <Box>
                                                    <Typography variant='h2' className='text-white' gutterBottom>{caseStudy?.solution
                                                        ?.sectionHeading || ''}</Typography>
                                                    {
                                                        caseStudy?.solution
                                                            ?.content && <Portabletext content={caseStudy.solution.content} />
                                                    }
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            caseStudy?.result && <Box className='mt-5'>
                                                <Box>
                                                    <Typography variant='h2' className='text-white' gutterBottom>{caseStudy?.result
                                                        ?.sectionHeading || ''}</Typography>
                                                    {
                                                        caseStudy?.result
                                                            ?.content && <Portabletext content={caseStudy.result.content} />

                                                    }
                                                </Box>
                                            </Box>
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Box mt={5} component={Paper} p={2} className='sideForm'>
                                            <Box mb={2}>
                                                <Typography className='text-dark' variant='h3' align='center'>Contact Us</Typography>
                                            </Box>
                                            <form method='POST' onSubmit={handleSubmit}>
                                                <Box mb={2}>
                                                    <TextField type='email' variant='outlined' label="Enter your email" fullWidth name='Email' className='text--teritory bg-white rounded-4' value={data.Email} onChange={handleOnChange} required />
                                                </Box>
                                                <Box mb={2}>
                                                    <TextField type='url' variant='outlined' label="Enter your website URL" name='Website' fullWidth className='text--teritory bg-white rounded-4' value={data.Website} onChange={handleOnChange} required />
                                                </Box>
                                                <Box>
                                                    <Button type='submit' fullWidth className='dark-contained-btn'>
                                                        Submit
                                                    </Button>
                                                </Box>
                                            </form>
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

export default Content