import { PricingCard1 } from "@/components";
import { OurClient, Portfolio, SaasHero, Team } from "@/sections";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SassServices = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.mode === "dark",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.500",
          //   border: "1px solid",

          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }

  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

  const strategy = [
    {
      id: "strategy-1",
      name: "Brand Awareness",
      desc: "Dominate search engine rankings with our top-notch SEO content. Our team of SEO and content experts creates captivating content that attracts the perfect audience and boosts traffic and conversions.",
    },
    {
      id: "strategy-2",
      name: "Keyword Research",
      desc: "Our cutting-edge AI technology uncovers and ranks the keywords your customers search for. We then match these keywords with relevant content at every stage of their buying journey, ensuring speedy results.",
    },
    {
      id: "strategy-3",
      name: "Content Marketing",
      desc: "Does the story you write resonate with your audience? Maybe not. We craft a winning content strategy to ideate, prioritize, optimize, create, and promote content that drives traffic and converts customers.",
    },
    {
      id: "strategy-4",
      name: "Off-page Optimization",
      desc: "If your website traffic drops, our off-page SEO services can help. We offer all-inclusive off-page optimization solutions that will you grow the online presence of your company organically. ",
    },
    {
      id: "strategy-5",
      name: "On-page Optimization",
      desc: "Your business pages—like your product or service pages— will be thoroughly examined by our experts, and they will be optimized for improved search engine exposure and higher conversion rates.",
    },
    {
      id: "strategy-6",
      name: "Ecommerce",
      desc: "Ecommerce SEO boosts your chances of appearing in the top ten organic results for your product pages. When you choose RankFast, you're getting a skilled and enthusiastic team who are experts in this field.",
    },
    {
      id: "strategy-7",
      name: "Social Media",
      desc: "We create amazing social media personas that maximize your return on investment and have long-lasting effects. We’ll help you connect deeply with your audience, and build brand loyalty.",
    },
    {
      id: "strategy-8",
      name: "Conversion Rate Optimization",
      desc: "We're a SaaS SEO agency that focuses on long-term success. Transform your website traffic into promising leads with our cutting-edge SaaS SEO services, powered by industry-standard data.",
    },
    {
      id: "strategy-9",
      name: "Technical Optimization",
      desc: "Does your search performance suffer from technical troubles? We'll check. Our Technical SEO services for SaaS businesses ensures your site is optimized for organic search performance by removing bottlenecks.",
    },
  ];

  const pricingPlan = [
    {
      id: "plan-1",
      planName: "Gold",
      list: [
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
      ],
    },
    {
      id: "plan-2",
      planName: "Platinum",
      list: [
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
      ],
    },
    {
      id: "plan-3",
      planName: "Custom",
      list: [
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
        { listText: "Access to all basic features" },
      ],
    },
  ];

  return (
    <>
      <SaasHero />
      <OurClient />
      <section className="sectionMargin">
        <Container maxWidth="xxl">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={11}>
              <Box py={2}>
                <Typography variant="h2" className="text-white">
                  Our Saas SEO Strategy
                </Typography>
                <Box mt={2}>
                  <Grid container spacing={2}>
                    {strategy &&
                      strategy !== null &&
                      strategy !== undefined &&
                      strategy !== "" &&
                      strategy.length > 0 &&
                      strategy.map((s) => (
                        <Grid item xs={12} sm={6} md={4}>
                          <Card
                            className="bg-secondary-2 strategyCard"
                            sx={{ height: "100%" }}
                          >
                            <CardContent>
                              <Typography
                                variant="h3"
                                gutterBottom
                                className="text-white"
                              >
                                {s.name}
                              </Typography>
                              <Typography>{s.desc}</Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="sectionMargin" id="saasCards">
        <Container maxWidth="xxl">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={11}>
              <Box py={2}>
                <Box mb={5}>
                  <Typography
                    variant="h2"
                    align="center"
                    className="text-white "
                  >
                    Why RankFast Choose RankFast For Your SaaS Brand?
                  </Typography>
                </Box>
                <Box mb={4} p={2} className="bg-secondary-2 rounded-2 saasCard">
                  <Grid
                    container
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={3}>
                      <Box>
                        <img src="/images/saas1.png" className="img-fluid" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Typography className="text-white mb-5" variant="h3">
                        24/7 Support
                      </Typography>
                      <Typography className="text-white saasCardPara">
                        Our processes seamlessly blend with your team. We stay
                        connected with your team through our project management
                        system and a shared Slack channel, ensuring seamless
                        coordination and constant communication.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box mb={4} p={2} className="bg-secondary-2 rounded-2 saasCard">
                  <Grid
                    container
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={3}>
                      <Box>
                        <img src="/images/saas1.png" className="img-fluid" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Typography className="text-white mb-5" variant="h3">
                        Transparency
                      </Typography>
                      <Typography className="text-white saasCardPara">
                        We want you to be as informed as possible about the
                        status of our project, therefore we're giving you direct
                        access to the project management dashboard so you can
                        view the dates by which each work is expected to be
                        completed.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box mb={4} p={2} className="bg-secondary-2 rounded-2 saasCard">
                  <Grid
                    container
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={3}>
                      <Box>
                        <img src="/images/saas1.png" className="img-fluid" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Typography className="text-white mb-5" variant="h3">
                        Customized Plan
                      </Typography>
                      <Typography className="text-white saasCardPara">
                        Each business has its own unique identity. We delve into
                        your business and goals to craft a one-of-a-kind
                        strategy just for you. No matter your business type,
                        we'll create the perfect SEO strategy for you.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box mb={4} p={2} className="bg-secondary-2 rounded-2 saasCard">
                  <Grid
                    container
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={3}>
                      <Box>
                        <img src="/images/saas1.png" className="img-fluid" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Typography className="text-white mb-5" variant="h3">
                        Cutting-edge technology & Budget Friendly{" "}
                      </Typography>
                      <Typography className="text-white saasCardPara">
                        We stay ahead of the curve, crafting cutting-edge
                        strategies that drive tangible success for your
                        business. We offer budget friendly services, so you have
                        to worry about your managing finances also. You're
                        investing in the wisdom of our SEO team, not just an
                        individual.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box
                mt={1}
                className="d-flex justify-content-center align-items-center"
              >
                {/* <Button className="primary-contained-button-1">
                  Get Free SEO Audit!
                </Button> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Card className='bg-secondary-2'>
                                    <CardContent>
                                        <Grid container justifyContent="center">
                                            <Grid item xs={12} sm={10}>
                                                <Box py={3}>
                                                    <Typography variant='h2' className='text-white' align='center'>Rankfast Targeting</Typography>
                                                    <Box>
                                                        <div className="progress">
                                                            <div class="progress-bar bg-success" role="progressbar" style={{ width: "96%" }} ariaValuenow="96" ariaValuemin="0" ariaValuemax="100"><strong className='text-right text-secondart-1'>96%</strong></div>
                                                        </div>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card className='belowTargetingCard'>
                                            <CardContent>
                                                <Typography className='percent'>20%</Typography>
                                                <Typography variant='h3' className='text-white'>Heading</Typography>
                                                <Typography className='cardPara'>Your website feels like a small fish in the enormous internet ocean, struggling to make a mark amongst your target.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card className='belowTargetingCard'>
                                            <CardContent>
                                                <Typography className='percent'>20%</Typography>
                                                <Typography variant='h3' className='text-white'>Heading</Typography>
                                                <Typography className='cardPara'>Your website feels like a small fish in the enormous internet ocean, struggling to make a mark amongst your target.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card className='belowTargetingCard'>
                                            <CardContent>
                                                <Typography className='percent'>20%</Typography>
                                                <Typography variant='h3' className='text-white'>Heading</Typography>
                                                <Typography className='cardPara'>Your website feels like a small fish in the enormous internet ocean, struggling to make a mark amongst your target.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section> */}

      <Team />

      <section>
        <Container maxWidth="xxl">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={11}>
              <Box py={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}></Grid>
                  <Grid item xs={12} sm={6}></Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* <Box className="sectionMargin"> */}
      {/* <Portfolio /> */}
      {/* </Box> */}
      {/* <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={10}>
                            <Box py={2}>
                                <Typography variant='h2' className='text-white' align='center' gutterBottom>Simple, Transparent Pricing</Typography>
                                <Typography className='text-white' align='center'>We believe top-tier SEO services should be within reach for businesses, regardless of their size.</Typography>
                                <Box mt={5}>
                                    <Grid container spacing={2}>
                                        {
                                            pricingPlan.map((item, index) => <Grid item xs={12} sm={6} md={4}>
                                                <PricingCard1 planName={item.planName} list={item.list} link="https://calendly.com/rankfast-seo/call?month=2023-06" isGrow={index === 1} />
                                            </Grid>)
                                        }
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section> */}
      <section className="sectionMargin">
        <Container maxWidth="xxl">
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }} className="m-3">
            <Box rowSpacing={3} className="align-self-center justify-content-center">
              <Typography
                variant="h2"
                className="text-white"
                align="center"
                gutterBottom
              >
                Get Your Free SaaS Audit
              </Typography>
              <Typography
                variant="h4"
                className="text-white"
               
                gutterBottom
              >
                Discover hidden opportunities for growth, pinpoint areas for
                optimization, and receive tailored recommendations to enhance
                your digital presence. Get started on the path to SaaS success -
                claim your Free SaaS Audit today.
              </Typography>
              {/* <div className="d-flex align-items-center justify-content-center mt-5">
              <Button>
                Book Now
              </Button>
              </div> */}
              <Box
                mt={5}
                className="d-flex justify-content-center align-items-center"
              >
                <Button className="primary-contained-button-1">
                  Book Now
                </Button>
              </Box>
            </Box>
            <img src="/images/portfolioB.png"></img>
          </Box>
        </Container>
      </section>

      <section className="sectionMargin">
        <Container maxWidth="xxl">
          <Container maxWidth="xxl" className="m-4 text-white">
            <Box className="m-3">
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={2} className="font-weight-bold">
                    Why do you need a SaaS SOE agency{" "}
                    <img src="/images/Qimg1.png"></img>
                  </Grid>
                  <Grid item xs={12} sm={10} className="align-self-center h4">
                    How long does it take to see results from SaaS SEO? How much
                    do SaaS SEO services cost? A SaaS SEO agency boosts your
                    software's visibility, reaching the right audience, building
                    credibility, and ensuring continuous optimization for
                    long-term success and a high return on investment.
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={10} className="align-self-center h4">
                    Results vary, but early changes may appear in a few weeks,
                    significant improvements in 3-6 months, and full benefits in
                    6+ months. Patience is crucial in SEO as it's a long-term
                    investment.
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    How long does it take to see results from SaaS SEO?
                    <img src="/images/Qimg2.png"></img>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={2}>
                    How much do SaaS SEO services cost?
                    <img src="/images/Qimg3.png"></img>
                  </Grid>
                  <Grid item xs={12} sm={10} className="align-self-center h4">
                    Costs vary based on factors like project scope and industry
                    competitiveness. Prices range from a few hundred to several
                    thousand dollars per month. Discuss your goals to tailor a
                    plan that fits your budget and objective.
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Container>
      </section>
      <section className="sectionMargin">
        <Container maxWidth="xxl">
          <Container maxWidth="xxl" className="m-3">
            <Typography className="d-flex justify-content-center">
              <Typography
                variant="h2"
                className="text-white p-4"
                style={{ width: "80%" }}
              >
                Read our clients testimonials and reviews about our service
              </Typography>
            </Typography>
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}
              className="text-white bg-black"
            >
              <Item>Byju's Testimonial-World's lagrest Edtech company</Item>
              <Item>BV Council</Item>
              <Item>Builder AI</Item>
              <Item>Think & Learn Smarter Irish company</Item>
              <Item>NOTIFY VISITORS</Item>
            </Box>
          </Container>
        </Container>
      </section>
      <section className="sectionMargin">
        <Container maxWidth="xxl">
          <Container maxWidth="xxl" className="m-3">
            <Typography variant="h2" className="text-white  m-2">
              Frequently asked questions
            </Typography>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel1bh-content"
                className="bg-black"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  1. What is Saas and how can it benefit my business ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-black text-white">
                <Typography>
                  Saas is cloud-based software. It benefits businesses with
                  cost-efficiency, scalability, and accessibility.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel2bh-content"
                className="bg-black text-white"
                id="panel2bh-header"
              >
                <Typography sx={{ color: "text-white bg-black" }}>
                  2. Why do I need SEO for my SaaS business ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-black text-white">
                <Typography className="bg-black text-white">
                  SEO boosts online visiblity, attracts leads, and builds
                  credibility for long-term success.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel2bh-content"
                className="bg-black text-white"
                id="panel2bh-header"
              >
                <Typography sx={{ color: "text-white bg-black" }}>
                  3. How long does it take to see results from Saas SEO services
                  ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-black text-white">
                <Typography className="bg-black text-white">
                  Results vary, with early changes in weeks and significants
                  improvements in 3-6 months.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel2bh-content"
                className="bg-black text-white"
                id="panel2bh-header"
              >
                <Typography sx={{ color: "text-white bg-black" }}>
                  4. How do you approach content creation for SaaS SEO ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-black text-white">
                <Typography className="bg-black text-white">
                  In-depth research, creating high-quality, relevant content for
                  user and search engine appeal.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel2bh-content"
                className="bg-black text-white"
                id="panel2bh-header"
              >
                <Typography sx={{ color: "text-white bg-black" }}>
                  5. What is the cost structure for your SaaS SEO services?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-black text-white">
                <Typography className="bg-black text-white">
                  Costs vary; we offer tailored packages. Contact us for a
                  personalized quote based on your needs.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel2bh-content"
                className="bg-black text-white"
                id="panel2bh-header"
              >
                <Typography sx={{ color: "text-white bg-black" }}>
                  6. How can I get started with your SaaS SEO services ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-black text-white">
                <Typography className="bg-black text-white">
                  Contact us for a consultation. We'll discuss objectives,
                  assess your digital presence, and create a customized plan.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default SassServices;
