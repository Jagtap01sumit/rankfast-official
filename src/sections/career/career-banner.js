import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import Styles from '@/styles/Career-Banner.module.css'

const CareerBanner = () => {
    return (
        <>
            <section style={{ backgroundColor: "#212121" }}>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2} className="d-flex justify-content-center align-items-center">
                                <img src="/images/vacancy-banner.gif" className={`img-fluid ${Styles.bannerImg}`} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default CareerBanner