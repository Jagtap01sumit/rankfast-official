import React from 'react'
import { Box, Container, Grid } from '@mui/material'


const SingleBlogBanner = ({ bg }) => {


    return (
        <>
            <section id="singleBlogBannerSection">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2} id="singleBlogHero" sx={{ background: `url(${bg})` }}>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default SingleBlogBanner