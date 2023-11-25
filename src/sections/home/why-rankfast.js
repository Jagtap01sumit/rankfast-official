import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const WhyRankfast = () => {
    const [progress, setProgress] = React.useState(0);
    const [selectedTab, setSelectedTab] = useState('ot');
    const [value, setValue] = useState('');

    useEffect(() => {
        if (selectedTab === 'ot') {
            setValue('6,000,000+');
        } else if (selectedTab === 'sc') {
            setValue('200+');
        } else if (selectedTab === 'avg') {
            setValue('310%');
        } else if (selectedTab === 'rg') {
            setValue('2 Million +');
        }
    }, [selectedTab]);

    const changeTabAutomatically = () => {
        const tabs = ['ot', 'sc', 'avg', 'rg'];
        let currentIndex = tabs.indexOf(selectedTab);
        currentIndex = (currentIndex + 1) % tabs.length;
        setSelectedTab(tabs[currentIndex]);

        // Start progress and stop it after 5 seconds
        setProgress(0);
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 50));
        }, 500);

        setTimeout(() => {
            clearInterval(timer); // Clear the timer to stop increasing progress
        }, 2000);
    };

    useEffect(() => {
        const interval = setInterval(changeTabAutomatically, 2000);

        return () => clearInterval(interval);
    }, [selectedTab]);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 50));
        }, 500);

        setTimeout(() => {
            setProgress(0);
            clearInterval(timer); // Clear the timer to stop increasing progress
        }, 2000);

        return () => {
            clearInterval(timer); // Clean up the timer when the component unmounts
        };
    }, []);

    return (
        <>
            <section className="sectionMargin" id="whySec">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Box mb={2}>
                                    <Typography variant="h2" className="text-white" align="center">
                                        Why Rankfast ?
                                    </Typography>
                                </Box>
                                <Box className='d-none d-lg-block'>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Box p={4} className="bg-secondary-2 rounded-5">
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <Box
                                                            p={2}
                                                            className={`tabCard ${selectedTab === 'ot' ? 'active' : 'not-active'}`}
                                                            component={Paper}
                                                            onClick={() => setSelectedTab('ot')}
                                                        >
                                                            <Grid container spacing={2} alignItems="center">
                                                                {selectedTab === 'ot' && <Grid item xs={1.5}>
                                                                    <CircularProgress variant="determinate" value={progress} sx={{ color: "#fff" }} />
                                                                </Grid>}
                                                                <Grid item xs={10.5}>
                                                                    <Typography variant="h4">Organic Traffic</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box
                                                            p={2}
                                                            className={`tabCard ${selectedTab === 'sc' ? 'active' : 'not-active'}`}
                                                            component={Paper}
                                                            onClick={() => setSelectedTab('sc')}
                                                        >
                                                            <Grid container spacing={2} alignItems="center">
                                                                {selectedTab === 'sc' && <Grid item xs={1.5}>
                                                                    <CircularProgress variant="determinate" value={progress} sx={{ color: "#fff" }} />
                                                                </Grid>}
                                                                <Grid item xs={10.5}>
                                                                    <Typography variant="h4">Satisfied Clients</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box
                                                            p={2}
                                                            className={`tabCard ${selectedTab === 'avg' ? 'active' : 'not-active'}`}
                                                            component={Paper}
                                                            onClick={() => setSelectedTab('avg')}
                                                        >
                                                            <Grid container spacing={2} alignItems="center">
                                                                {selectedTab === 'avg' && <Grid item xs={1.5}>
                                                                    <CircularProgress variant="determinate" value={progress} sx={{ color: "#fff" }} />
                                                                </Grid>}
                                                                <Grid item xs={10.5}>
                                                                    <Typography variant="h4">Average increase in website traffic</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box
                                                            p={2}
                                                            className={`tabCard ${selectedTab === 'rg' ? 'active' : 'not-active'}`}
                                                            component={Paper}
                                                            onClick={() => setSelectedTab('rg')}
                                                        >
                                                            <Grid container spacing={2} alignItems="center">
                                                                {selectedTab === 'rg' && <Grid item xs={1.5}>
                                                                    <CircularProgress variant="determinate" value={progress} sx={{ color: "#fff" }} />
                                                                </Grid>}
                                                                <Grid item xs={10.5}>
                                                                    <Typography variant="h4">REVENUE GENERATED</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Box p={2} component={Paper} sx={{ height: '100%' }} className="rounded-5 d-flex justify-content-around align-items-center bg-secondary-2">
                                                <Typography className="wValue">{value}</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box className="d-block d-lg-none" id="whySlider">
                                    <Swiper
                                        pagination={{
                                            type: 'fraction',
                                        }}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={true}
                                        modules={[Pagination, Navigation, Autoplay]}

                                    >
                                        <SwiperSlide>
                                            <Card className='py-3'>
                                                <CardContent>
                                                    <Typography className='wSliderText'>6,000,000+</Typography>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className='py-3'>
                                                <CardContent>
                                                    <Typography className='wSliderText'>200+</Typography>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className='py-3'>
                                                <CardContent>
                                                    <Typography className='wSliderText'>310%</Typography>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className='py-3'>
                                                <CardContent>
                                                    <Typography className='wSliderText'>2 Million +</Typography>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                    </Swiper>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default WhyRankfast;
