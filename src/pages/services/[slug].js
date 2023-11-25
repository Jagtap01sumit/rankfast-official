import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { clearPageState, fetchPage } from '@/redux/action/pageAction';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { CommonHero, Head, Portfolio, PricingPlan, Problem, SubServices } from '@/sections';
import { TrendingUp } from '@mui/icons-material';

const SingleService = () => {
    const { page } = useSelector(state => state.pageReducer);
    const dispatch = useDispatch();
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if (slug) {
            dispatch(clearPageState());
            dispatch(fetchPage(slug));
        }
    }, [slug, dispatch]);


    return (
        <>
            {page === null && (
                <>
                    <Head title="loading..." />
                    <section>
                        <Container
                            maxWidth="xxl"
                            sx={{ height: '100vh' }}
                            className='d-flex justify-content-center align-items-center'
                        >
                            <Typography className='text-white'>Loading...</Typography>
                        </Container>
                    </section>
                </>
            )}
            {page && (
                <>
                    <Head
                        title={page.metaTitle || 'Service - Rankfast'}
                        description={page.metaDescription || ''}
                        canonical={`/services/${page.slug?.current}/`}
                        robots={page.robots || ''}
                    />
                    {page.banner && (
                        <CommonHero
                            heading={`<span class="text-primary-2">${page.banner.pageHeading?.split(' ')[0]}</span> ${page.banner.pageHeading?.split(" ").slice(1).join(" ")}`}
                            tagline={page.banner.tagline && page.banner.tagline}
                            btnText1={page.banner?.actionButton1?.buttonText}
                            btnLink1={page.banner?.actionButton1?.link}
                            btnText2={page.banner?.actionButton2?.buttonText}
                            btnLink2={page.banner?.actionButton2?.link}
                            img1={page.banner && page.banner !== null && page.banner !== undefined && page.banner !== "" && Object.keys(page.banner).length > 0 && page.banner.image && page.banner.image !== null && page.banner.image !== undefined && page.banner.image !== "" && Object.keys(page.banner.image).length > 0 && page.banner.image.asset && page.banner.image.asset !== null && page.banner.image.asset !== undefined && page.banner.image.asset !== "" && Object.keys(page.banner.image.asset).length > 0 && page.banner.image.asset._ref && page.banner.image.asset._ref !== null && page.banner.image.asset._ref !== undefined && page.banner.image.asset._ref !== "" && `https://cdn.sanity.io/images/cyz6zl3a/production/${page.banner.image.asset._ref.split('-')[1]}-${page.banner.image.asset._ref.split('-')[2]}.${page.banner.image.asset._ref.split('-')[3]}`}
                        />
                    )}

                    {
                        page.about2Section && page.about2Section !== null && page.about2Section !== undefined && page.about2Section !== "" && Object.keys(page.about2Section).length > 0 && <section className='sectionMargin'>
                            <Container maxWidth="xxl">
                                <Grid container justifyContent="center">
                                    <Grid item xs={12} sm={11}>
                                        <Box py={2}>
                                            <Box className="about2Head">
                                                <Typography variant='h2' className='text-white text-left text-sm-center' gutterBottom>{page?.about2Section?.sectionHeading}</Typography>
                                                <Typography className='text-primary-1 text-left text-sm-center' gutterBottom>{page?.about2Section?.tagline}</Typography>
                                            </Box>
                                            <Box mt={5}>
                                                <Grid container spacing={2}>
                                                    {
                                                        page.about2Section.cards && page.about2Section.cards !== null && page.about2Section.cards !== undefined && page.about2Section.cards !== "" && page.about2Section.cards.map(i => <Grid item xs={12} sm={6}>
                                                            <Card className='bg-secondary-2'>
                                                                <CardContent>
                                                                    <Grid container spacing={2}>
                                                                        <Grid item xs={1.5}>
                                                                            <TrendingUp className='text-white' />
                                                                        </Grid>
                                                                        <Grid item xs={10.5}>
                                                                            <Typography variant='h4' className='text-white mb-4'>{i.cardTitle}</Typography>
                                                                            <Typography>{i.cardText}</Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>)
                                                    }
                                                </Grid>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>
                        </section>
                    }

                    {
                        page.ourServices && page.ourServices !== null && page.ourServices !== undefined && page.ourServices !== "" && Object.keys(page.ourServices).length > 0 && <SubServices title={`Our <span class="text-primary-2" style="text-transform: capitalize;">${page.pageTitle && page.pageTitle !== null && page.pageTitle !== undefined && page.pageTitle !== "" && page.pageTitle.split(" ")[0]}</span> <span style="text-transform: capitalize;">${page.pageTitle && page.pageTitle !== null && page.pageTitle !== undefined && page.pageTitle !== "" && page.pageTitle.split(" ").slice(1).join(" ")}</span>`} services={page.ourServices.services && page.ourServices.services !== null && page.ourServices.services !== "" && page.ourServices.services.length > 0 && page.ourServices.services} />
                    }
                    {
                        <Portfolio />
                    }
                    {
                        page.pricingPlan && <PricingPlan
                            para={page.pricingPlan?.paragraph}
                            plan={page.pricingPlan?.plans}
                        />
                    }
                </>
            )}
        </>
    );
};

export default SingleService;
