import { Box, Container, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Portabletext } from '@/components'

const ContinueReading = ({ caseStudies, slug }) => {
    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Typography variant='h2' className='text-white' align='center'>Continue Reading</Typography>
                                <Box mt={5}>
                                    <Grid container spacing={2}>
                                        {
                                            caseStudies && caseStudies !== null && caseStudies !== undefined && caseStudies !== "" && caseStudies.length > 0 && caseStudies.filter(entries => entries?.seo?.slug?.current !== slug).slice(0, 3).map(item => <Grid item xs={12} sm={6} md={4}>
                                                <Card component={Paper} className='shadow-lg bg-secondary-2' sx={{ height: "100%", cursor: "pointer" }} onClick={() => router.push(`/case-study/${item?.seo?.slug?.current}`)}  >
                                                    <CardMedia
                                                        component="img"
                                                        image={item?.bannerImage?.asset?._ref ? `https://cdn.sanity.io/images/cyz6zl3a/production/${item?.bannerImage?.asset?._ref.split("-")[1]}-${item?.bannerImage?.asset?._ref.split("-")[2]}.${item?.bannerImage?.asset?._ref.split("-")[3]}` : '/images/single-blog.banner.jpg'}
                                                        sx={{ height: 200 }}
                                                    />
                                                    <CardContent>
                                                        <Typography className='text-white mb-3' variant='h4' gutterBottom>{item?.title}</Typography>
                                                        {item && item.about && item.about.content
                                                            ? <Portabletext content={item.about.content} />
                                                            : null
                                                        }
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
        </>
    )
}

export default ContinueReading