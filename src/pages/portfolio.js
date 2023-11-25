import { CommonHero, Head } from '@/sections'
import { Box, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { ProjectCard1, ProjectCard2 } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { getPortfolio } from '@/redux/action/portfolioAction';

const OurPortfolio = () => {
    const dispatch = useDispatch()
    const { portfolio } = useSelector(state => state.portfolioReducer)

    useEffect(() => {
        dispatch(getPortfolio())
    }, [])

    console.log(portfolio)

    return (
        <>
            <Head
                title="Portfolio | Rankfast"
                description="Check out Rankfast's portfolio and see how our team of SEO experts has helped businesses improve their online presence and achieve higher search engine rankings. Our customized solutions include SEO, content marketing, link building, UI UX design, and more."
                robots="index"
                canonical="/portfolio/"
            />
            <CommonHero
                heading={`Our Portfolio`}
                img1='/images/portfolioB.png'
            />
            {
                portfolio !== null && portfolio !== undefined && portfolio !== "" && portfolio.length > 0 && <section className='sectionMargin'>
                    <Container maxWidth="xxl">
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={11}>
                                <Box py={2}>
                                    <Grid container spacing={{ xs: 2, sm: 4 }} sx={{ overflow: 'hidden' }}>
                                        {
                                            portfolio.map(project => <Grid item xs={12} sm={6} md={4} key={project._id}>
                                                <ProjectCard2 logo={project?.companyLogo?.asset?._ref ? `https://cdn.sanity.io/images/cyz6zl3a/production/${project.companyLogo.asset._ref.split("-")[1]}-${project.companyLogo.asset._ref.split("-")[2]}.${project.companyLogo.asset._ref.split("-")[3]}` : null} content={project?.projectDescription} />
                                            </Grid>
                                            )
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

export default OurPortfolio