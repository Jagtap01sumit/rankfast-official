import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Portabletext, PricingCard1 } from '@/components'

const PricingPlan = ({ para, plan }) => {
    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2} className="text-sm-center text-start">
                                <Typography variant='h2' className='text-white' gutterBottom>Simple, transparent pricing</Typography>
                                {para !== undefined && para !== undefined && para !== "" && <Portabletext content={para} />}
                            </Box>
                            <Box mt={2}>
                                <Grid container spacing={2} justifyContent="center">
                                    {plan && plan !== null && plan !== undefined && plan !== "" && plan.length > 0 && plan.map((item, index) => <Grid ky={plan._key} item xs={12} sm={6} md={3.5}>
                                        <PricingCard1 planName={item?.planName} list={item?.lists} desc={item?.description} link={item?.button?.link} isGrow={index === 1} />
                                    </Grid>)}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default PricingPlan