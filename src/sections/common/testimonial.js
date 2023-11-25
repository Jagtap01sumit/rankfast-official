import React from 'react'
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { TestimonialCard1 } from '@/components';
import Styles from '@/styles/Testimonial-Card-1.module.css'

const Testimonial = () => {
    return (
        <>
            <section className='sectionMargin' id="Testimonial">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Typography variant='h2' className='text-white'>Our Happy Clients</Typography>
                                <Box mt={2}>
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={50}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        loop={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay, Pagination]}
                                        className={Styles.mySwiper}
                                    >
                                        <SwiperSlide>
                                            <TestimonialCard1 />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <TestimonialCard1 />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <TestimonialCard1 />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <TestimonialCard1 />
                                        </SwiperSlide>
                                    </Swiper>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Testimonial