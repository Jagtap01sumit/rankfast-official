import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import { Portabletext } from '@/components'
import { getCaseStudies } from '@/redux/action/caseStudyAction'
import { CommonHero, Head } from '@/sections'


const CaseStudy = () => {
    const { caseStudies } = useSelector(state => state.caseStudyReducer)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        dispatch(getCaseStudies())
    }, [])

    console.log(caseStudies)

    return (
        <>
            <Head
                title="Case Studies | Rankfast - Boosting Online Presence and SEO Success"
                description="Explore our case studies to see how Rankfast, a leading SEO agency, has helped businesses enhance their online presence and achieve higher search engine rankings. Discover our customized solutions, including SEO, content marketing, link building, UI/UX design, and more. Learn from our success stories and our commitment to education through free online courses on Coursenator."
                robots="index"
                canonical="/case-study/"
            />
            <CommonHero
                heading="Case Study"
                img1="/images/main-seo-banner.png"
            />
            {
                caseStudies && caseStudies !== null && caseStudies !== undefined && caseStudies !== "" && caseStudies.length > 0 && <section>
                    <Container maxWidth="xxl">
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={11}>
                                <Box py={2}>
                                    <Grid container spacing={2}>
                                        {
                                            caseStudies.map(item => <Grid item xs={12} sm={6} md={4} key={item._id}>
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
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            }
        </>
    )
}

export default CaseStudy