import React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Styles from '@/styles/Common-Hero.module.css'
import Marquee from "react-fast-marquee";


const CommonHero = ({ heading, tagline, btnLink1, btnLink2, btnText1, btnText2, img1 }) => {
    const router = useRouter()
    return (
        <>
            <section id="commonBanner">
                <Container maxWidth="xxl" className='bannerContainer'>
                    <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                {
                                    router.pathname !== "/portfolio" ? <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={12} sm={7} order={{ xs: 2, sm: 1 }}>
                                            <Typography variant='h1' className='text-white' gutterBottom dangerouslySetInnerHTML={{ __html: heading }} />
                                            <Typography>{tagline}</Typography>
                                            <Box mt={3}>
                                                {btnText1 && <Button className='primary-contained-button-1 me-0 me-sm-3' onClick={() => router.push(btnLink1)}>{btnText1}</Button>}
                                                {btnText2 && <Button className='teritory-outlined-button-1 mt-3 mt-sm-0' onClick={() => router.push(btnLink2)}>{btnText2}</Button>}
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={5} className={Styles.BannerImageContainer} order={{ xs: 1, sm: 2 }}>
                                            <img src={img1} className={`img-fluid ${Styles.bannerImage}`} />
                                        </Grid>
                                    </Grid> : <Box className="portfolioBanner" sx={{ position: "relative" }}>
                                        <Marquee style={{ overflow: 'hidden' }}>
                                            <Typography variant='h1' className='text-white mx-5' gutterBottom dangerouslySetInnerHTML={{ __html: heading }} />
                                            <Typography variant='h1' className='text-white mx-5' gutterBottom dangerouslySetInnerHTML={{ __html: heading }} />
                                        </Marquee>
                                        <img src={img1} className='img-fluid portfolioBannerImage' />

                                    </Box>
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default CommonHero