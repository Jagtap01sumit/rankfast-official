import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import Styles from '@/styles/Testimonial-Card-1.module.css'

const TestimonialCard1 = () => {
    return (
        <>
            <Card className={Styles.card}>
                <CardContent>
                    <Box>
                        <img src="/images/quote-1.svg" className={`img-fluid ${Styles.quote1}`} />
                    </Box>
                    <Box>
                        <Typography className={Styles.testimonialText}><strong>They've demonstrated a level of confidence</strong> that makes us feel comfortable that we are in good hands</Typography>
                        <Box mt={2} className={Styles.authorBox}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={2} sm={1.5}>
                                    <img src="/images/Pranav.png" className='img-fluid' />
                                </Grid>
                                <Grid item xs={10} sm={10.5}>
                                    <Typography variant='h5' className='text-white' gutterBottom>Stephen James</Typography>
                                    <Typography className='des'>Chief executive, Webdesign</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box>
                        <img src="/images/quote-2.svg" className={`img-fluid ${Styles.quote2}`} />
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default TestimonialCard1