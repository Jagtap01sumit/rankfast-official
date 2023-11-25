import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { StackedCard2 } from '@/components';

const SubServices = ({ title, services }) => {

    return (
        <section className='sectionMargin' id="subService">
            <Container maxWidth="xxl">
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={11}>
                        <Box py={2}>
                            <Typography variant='h2' className='text-white' gutterBottom dangerouslySetInnerHTML={{ __html: title }} />
                            <Box mt={5}>
                                <Box id="stackedContainer">
                                    <ul id="stackedCards">
                                        {services.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`stackCard ss bg-transparent`}
                                                id={`stackCard${index + 1}`}
                                            >
                                                <StackedCard2
                                                    title={item.cardTitle}
                                                    content={item.cardContent}
                                                    index={index}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default SubServices;
