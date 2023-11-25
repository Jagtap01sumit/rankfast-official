import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import CountUp from 'react-countup';


const Revenue = () => {

    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={9} sm={10}>
                            <Box py={2} sx={{ position: "relative" }}>
                                <Box className="bgRevenue"></Box>
                                <Box className={`revenueContainer shadow-lg p-3 p-sm-5`}>
                                    <Grid container spacing={2} alignItems="center" sx={{ height: "100%" }}>
                                        <Grid item xs={12} sm={10} order={{ xs: 2, md: 1 }}>
                                            <Typography variant='h3' className='text-white'>Revenue Generated</Typography>
                                            {/* <Typography className='revenueAmt'>$2,350,000</Typography> */}
                                            <CountUp
                                                start={0}
                                                end={2350000}
                                                duration={10}
                                                separator=','
                                                className='revenueAmt'
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={2} order={{ xs: 1, md: 2 }}>
                                            <img src="/images/dollar.svg" className='img-fluid dollarRevenue' />
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

export default Revenue