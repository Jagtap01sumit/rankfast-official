import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion';
import { MarkeeDiv, MarkeeDiv2 } from '@/components/styles';
import { ArrowDownward, South } from '@mui/icons-material';

const OurJourney = () => {
    const { scrollYProgress } = useScroll()
    const x1 = useTransform(scrollYProgress, [0, 1], [0, 2000])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -2000])
    const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

    const timelineData = [
        {
            date: 'December 2019',
            event: 'The Idea was Born',
            description: ["It all started with a simple, yet ambitious vision: to make online education accessible to everyone. Coursenator was born out of this passion. Our initial idea was to offer personalized course recommendations, making it easier for people to find their way through the maze of online education."],
        },
        {
            date: 'June 2020',
            event: 'Launch of Website',
            description: ["From a modest 600 monthly visitors, Coursenator's website witnessed a staggering surge to 15,000 visitors per month, all thanks to our dedicated focus on SEO. The word spread like wildfire, attracting over 800 enthusiastic instructors and partners who eagerly sought our platform to promote their courses.", "Right from the get-go, Pranav's innovative marketing strategies propelled us forward to remarkable heights. We made our mark by amassing an impressive following of 80,000 on LinkedIn in just 100 days, proving our knack for engaging with diverse audiences and creating meaningful connections.", "Yet, our journey wasn't without its fair share of challenges. Along the way, we encountered technical hurdles that demanded swift action. In the face of adversity, Pranay embraced the opportunity to learn coding and lead our development efforts with unwavering determination."],
        },
        {
            date: 'August 2021',
            event: 'First Success',
            description: ["Months of relentless effort finally bore fruit as we joyously celebrated our first major milestone - reaching a remarkable $18k in revenue. This achievement served as a resounding confirmation that our vision resonated with the community, igniting a stronger determination and unwavering commitment to our mission."],
        },
        {
            date: 'October 2021',
            event: 'Expansion',
            description: ["As we set our sights on expansion, we embarked on a new venture: Rankfast. This exciting project revolved around creating groundbreaking ed-tech businesses from scratch. With Rankfast, we added a fresh dimension to our operations and unlocked a world of new possibilities."],
        },
        {
            date: 'February 2022',
            event: 'Coursenator Private Limited',
            description: ["Our growth was swift. In less than two years from our inception, we officially registered as Coursenator Private Limited. This strategic move solidified our position in the ed-tech industry and laid a strong foundation for our ongoing expansion and success."],
        },
        {
            date: 'August 2022',
            event: '$1 Million Milestone',
            description: ["We reached a significant milestone when our efforts helped our clients generate a cumulative $1 million in revenue across multiple websites. This achievement served as a resounding validation of our approach, affirming that our work was genuinely making a meaningful difference."],
        },
        {
            date: 'Present Day',
            event: 'Marketing Agency with Specialized SEO Services',
            description: ['Today, we proudly stand as a thriving marketing agency with specializations in SEO services, empowering businesses to achieve their marketing goals. With our expertise in ed-tech, we create innovative solutions that drive growth and propel our clients to new heights.', 'In a moment of triumph, we celebrated yet another milestone on LinkedIn, surpassing an impressive 150,000 followers for Rankfast. This achievement further validates the effectiveness of our unique LinkedIn marketing strategy. ', 'Our journey has been a blend of challenges, excitement, and fulfillment. We eagerly anticipate many more years of success and growth ahead. We invite you to join us on this thrilling expedition, as together we redefine the world of online education and marketing.', 'In conclusion, our path has been paved with hurdles, victories, and valuable lessons. Through unwavering dedication, resilience, and a community-centric approach, we have navigated the intricate landscape of ed-tech and marketing. ', "We remain grateful for the support we've received along the way and are eager to see what the future holds for our team and the lives we continue to impact."],
        },
    ];

    return (
        <>
            <section style={{ paddingTop: "4.1rem" }} className='pb-5 pb-sm-0' >
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2} sx={{ position: 'relative' }}>
                                <div className="bg-primary-1 rounded-4 d-flex justify-content-center py-3" style={{ overflow: "hidden" }}>
                                    <MarkeeDiv className="d-flex align-items-center" id="markee1" style={{ x: x1, }}>
                                        <div style={{ width: "150px", marginRight: "3rem" }}>
                                            <img src="/images/logo-icon.png" className='img-fluid' />
                                        </div>
                                        <Typography className='marqueeText'>RankFast</Typography>
                                    </MarkeeDiv>
                                </div>
                                <Box>
                                    <img src="/images/our-journey.png" className='img-fluid journey-star' />
                                </Box>
                                <div className="bg-primary-2 rounded-4 d-flex justify-content-center mt-3 py-3" style={{ overflow: "hidden" }}>
                                    <MarkeeDiv className="d-flex align-items-center" id="markee2" style={{ x: x2 }}>
                                        <Box className="marquee-img">
                                            <img src="/images/logo-icon.png" className='img-fluid' />
                                        </Box>
                                        <Typography className='marqueeText'>RankFast</Typography>
                                    </MarkeeDiv>
                                </div>
                                <Box mt={3} className="d-flex justify-content-center align-items-center">
                                    <Box p={1.5} className="arrowJourney"><South className='text-white' sx={{ fontSize: "2rem" }} /></Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box id={`timelineContainer`} mt={4}>
                                <ul className='timelineCards'>
                                    {
                                        timelineData.map((t, i) => {

                                            return (
                                                <li
                                                    className={`timelineCard`}
                                                    id={`tcard${i + 1}`}
                                                >
                                                    <Box>
                                                        <Typography className='text-primary-1 date'>{t.date}</Typography>
                                                        <Typography variant='h3' className='text-white event' gutterBottom>{t.event}</Typography>
                                                        {Array.isArray(t.description) ? t.description.map((desc, j) => (
                                                            <Typography key={j} className='text-white desc'>{desc}</Typography>
                                                        )) : (
                                                            <Typography className='text-white'>{t.description}</Typography>
                                                        )}
                                                    </Box>
                                                    <Divider className='bg-teritory-2 my-3' />
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default OurJourney;
