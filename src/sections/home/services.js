import React, { useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { StackedCard } from '@/components';

const Services = () => {
    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById('stackedContainer');
            const cardElements = document.querySelectorAll('.stackCard');

            cardElements.forEach((cardElement, index) => {
                const rect = cardElement.getBoundingClientRect();
                const topPosition = (rect.top / container.clientHeight) * 100;
                const cardId = cardElement.getAttribute('id').replace('stackCard', '');

                if (index === 0 && topPosition <= 6.50) {
                    document.getElementById('stackCard1').classList.add('active');
                    document.getElementById('stackCard2').classList.remove('active');
                    document.getElementById('stackCard3').classList.remove('active');
                    document.getElementById('stackCard1').classList.remove('behind1');
                    document.getElementById('stackCard2').classList.remove('behind1');
                    document.getElementById('stackCard1').classList.remove('behind2');
                } else if (index === 1 && topPosition <= 6.50) {
                    document.getElementById('stackCard2').classList.add('active');
                    document.getElementById('stackCard1').classList.add('behind1');
                    document.getElementById('stackCard3').classList.remove('active');
                    document.getElementById('stackCard1').classList.remove('active');
                    document.getElementById('stackCard1').classList.remove('behind2');
                } else if (index === 2 && topPosition <= 6.50) {
                    cardElement.classList.add('active');
                    document.getElementById('stackCard3').classList.add('active');
                    document.getElementById('stackCard2').classList.add('behind1');
                    document.getElementById('stackCard1').classList.add('behind2');
                    document.getElementById('stackCard1').classList.remove('active');
                    document.getElementById('stackCard1').classList.remove('behind1');
                    document.getElementById('stackCard2').classList.remove('active');
                } else if (topPosition > 6.35) {
                    cardElement.classList.remove('active');
                    cardElement.classList.remove('behind1');
                    cardElement.classList.remove('behind2');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const services = [
        { id: 1, title: "Rank Higher in SERP With Rankfast's Data- driven SEO", list: ["Our SEO experts identify your core site setbacks and then fix them for 100% Google compliance.", "We find and integrate high-converting, goal-oriented keywords throughout your site content for 11X the SEO ROI.", "We build your authority through high-quality backlinks, ethical outreach, and content promotion.",], btnText: "See Proven Work!", btnLink: "#" },
        { id: 2, title: "Engage and Convert Readers with Rankfast's Targeted Content Services", list: ["Our content experts produce high-converting copy tailored to your audience's needs and preferences.", "We employ proven copywriting techniques to craft compelling content that captivates your customers.", "We optimize all content with keywords targeted to your business goals for 100% search visibility and traffic.",], btnText: "See Past Work!", btnLink: "#" },
        { id: 3, title: "Ramp Up Conversions with Rankfast's Comprehensive CRO Services", list: ["We identify and eliminate friction points through in-depth user R&D to boost the conversion rates by >23%.", "We optimize your site for maximum conversions by improving page speed, navigation, and forms.", "We craft persuasive copy, create high-converting layouts, and implement effective CTAs to guide visitors to sales.",], btnText: "See Real Results!", btnLink: "#" },
    ];

    return (
        <section className='sectionMargin' id='hs'>
            <Container maxWidth='xxl'>
                <Grid container justifyContent='center'>
                    <Grid item xs={12} sm={11}>
                        <Box py={2}>
                            <Box id='stackedContainer'>
                                <ul id='stackedCards'>
                                    {services.map((item) => (
                                        <li
                                            key={item.id}
                                            className={`stackCard bg-transparent`}
                                            id={`stackCard${item.id}`}
                                        >
                                            <StackedCard title={item.title} list={item.list} btnText={item.btnText} btnLink={item.btnLink} />
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Services;
