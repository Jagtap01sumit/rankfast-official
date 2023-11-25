import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FetchEmployeeTestimonial } from '@/redux/action/employeeTestimonial';
import { TestimonialCard2 } from '@/components';

const EmployeeTestimonial = () => {
    const [isActive, setIsActive] = useState(true)
    const { testimonial } = useSelector(state => state.empTestimonialReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchEmployeeTestimonial())
    }, [])

    return (
        <>
            {
                testimonial && testimonial !== null && testimonial !== undefined && testimonial !== "" && testimonial.length > 0 && <section className='sectionMargin' id="empTest">
                    <Container maxWidth="xxl">
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={11}>
                                <Box py={2}>
                                    <Typography variant='h2' className='text-white' align='center'>Our Team Story</Typography>
                                    <Box mt={2}>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            loop={true}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            breakpoints={{
                                                640: {
                                                    slidesPerView: 1,
                                                    spaceBetween: 20,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 40,
                                                },
                                                1024: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 50,
                                                },
                                            }}
                                            modules={[Autoplay]}
                                            className="mySwiper"
                                        >
                                            {
                                                testimonial.map(item => <SwiperSlide key={item._id}>
                                                    <TestimonialCard2 avatar={item?.employeeAvatar?.asset?._ref && `https://cdn.sanity.io/images/cyz6zl3a/production/${item?.employeeAvatar?.asset?._ref.split('-')[1]}-${item?.employeeAvatar?.asset?._ref.split('-')[2]}.${item?.employeeAvatar?.asset?._ref.split('-')[3]}`} feedback={item?.feedback.split(" ").slice(0, 15).join(" ")} name={item?.employeeName} designation={item?.employeeDesignation} quote1={!isActive && '/images/white-quote-outlined-2.png'} quote2={!isActive && '/images/white-quote-outlined-1.png'} />
                                                </SwiperSlide>)
                                            }
                                        </Swiper>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            }
        </>
    )
}

export default EmployeeTestimonial