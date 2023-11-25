import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Audit = () => {
    return (
        <>
<section className='sectionMargin' id="audit">
    <Container maxWidth="xxl">
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={11}>
                <Box py={2}>
                    <Box className="bg-secondary-2 rounded-3 auditBox p-0 p-sm-3">
                        <Grid container className="d-flex flex-direction-col">
                            <Grid item xs={12} lg={7}>
                                <Box sx={{ position: "relative", height: "100%" }}>
                                    <Box>
                                        <Typography variant='h2' className='text-white mb-2 auditSecTitle' gutterBottom>Request a free <span className='text-primary-2'>audit report</span></Typography>
                                        <Typography className='text-center text-sm-start'>Request a manual audit with strategy verified by experts and get it delivered the next day.</Typography>
                                    </Box>
                                    <Box className="auditFormContainer">
                                        <form>
                                            <Box mb={2}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField variant='outlined' type="text" label="Name" fullWidth />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField variant='outlined' type="email" label="Email" fullWidth />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box mb={2}>
                                                <TextField variant='outlined' type='url' label="Your website url" className='text-white' fullWidth required />
                                            </Box>
                                            <Box mb={2}>
                                                <Button className="primary-contained-button-1" sx={{
                                                    padding: "0.5rem 2rem",
                                                    width: '100%',
                                                    '@media (min-width: 600px)': {
                                                        width: 'auto',
                                                    },
                                                }}>Send</Button>
                                            </Box>
                                        </form>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={5}>
                                <Box sx={{ position: "relative" }} className="audit-img-container my-3 my-sm-0">
                                    <img src="/images/audit-1.png" className='audit-bg img-fluid' />
                                    <img src="/images/audit-1.png" className='img-fluid audit-img-1' />
                                </Box>
                                <Box className="d-block d-sm-none">
                                    <form>
                                        <Box mb={2}>
                                            <TextField variant='outlined' type="text" label="Name" fullWidth required />
                                        </Box>
                                        <Box mb={2}>
                                            <TextField variant='outlined' type="email" label="Email" fullWidth required />
                                        </Box>
                                        <Box mb={2}>
                                            <TextField variant='outlined' type='url' label="Your website url" className='text-white' fullWidth required />
                                        </Box>
                                        <Box mb={2}>
                                            <Button className="primary-contained-button-1" sx={{
                                                padding: "0.625rem 1.75rem",
                                                width: '100%',
                                                '@media only screen and (min-width: 600px)': {
                                                    width: "15.313rem"
                                                }
                                            }}>Send</Button>
                                        </Box>
                                    </form>
                                </Box>
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

export default Audit