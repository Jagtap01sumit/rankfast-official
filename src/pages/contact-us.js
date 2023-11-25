import React, { useEffect, useState } from 'react'
import { Head } from '@/sections'
import { Box, Button, Container, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Appointment } from '@/components'

const ContactUs = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Head
                title="Contact Us - Get in Touch with Rankfast's SEO Experts"
                description="Have a question or want to learn more about Rankfast's SEO services? Contact us today and speak with our team of experienced professionals. We offer customized solutions that can help improve your online presence and search engine rankings."
                robots="index"
                canonical="/contact-us/"
            />
            <section style={{ paddingTop: "4.1rem" }} id="contactUs">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={8} md={5}>
                            <Box py={1}>
                                <Typography variant='h1' className='text-white' gutterBottom align='center'>Contact Us</Typography>
                                <Box mt={1}>
                                    <form method='POST' action="https://formsubmit.co/ajax/6fbf0296c3ee2f674f94034ac8a6f5d2" encType="multipart/form-data">
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <Box>
                                                    <TextField type="text" variant='outlined' label="Name" name="Name" fullWidth required />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box>
                                                    <TextField type="email" variant='outlined' label="Email" name="Email" fullWidth required />
                                                </Box>
                                            </Grid>
                                            {/* <Grid item xs={12}>
                                                <Box>
                                                    <TextField type="tel" variant='outlined' label="Phone" name="Phone" fullWidth required />
                                                </Box>
                                            </Grid> */}
                                            <Grid item xs={12}>
                                                <Box>
                                                    <TextField type="url" variant='outlined' label="Enter website link" name="Website" fullWidth required />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box>
                                                    <TextField type="text" multiline rows={5} variant='outlined' label="Message" name="Message" fullWidth required />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box>
                                                    <Button className='primary-contained-button-1' fullWidth>Submit</Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={` sectionMargin`} id="bookWidgetContactus">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <Box py={2}>
                                <Box className="d-flex flex-column justify-content-center align-items-center">
                                    <IconButton onClick={() => setOpen(!open)}>{!open ? <ExpandLess sx={{ fontSize: "2rem", color: "#000" }} /> : <ExpandMore sx={{ fontSize: "2rem", color: "#000" }} />}</IconButton>
                                    <Typography variant='h2' className='text-white' style={{ color: "#fff" }}>Book A Meeting</Typography>
                                </Box>
                                <Box mt={2}>
                                    <Appointment />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default ContactUs