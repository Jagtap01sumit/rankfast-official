import { Box, Container, Grid } from '@mui/material'
import React from 'react'

const FeatureImage = ({ featuredImage }) => {
    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <img src={featuredImage} className='img-fluid' />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default FeatureImage