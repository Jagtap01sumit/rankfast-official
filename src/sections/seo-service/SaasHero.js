import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const SaasHero = () => {
  return (
    <>
      <section className="saasHero">
        <Container maxWidth="xxl">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={11}>
              <Box mt={8} py={2}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                    <Box>
                      <Box>
                        <Typography
                          variant="h1"
                          className="text-white"
                          gutterBottom
                        >
                          Innovate Transform And Rankfast
                        </Typography>
                        <Typography className="text-white">
                          Rankfast, the B2B SaaS SEO Agency, understands SaaS
                          companies. We help businesses reach their goals,
                          connect with clients, boost website traffic, and
                          thrive in the competitive market. With our strategic
                          process, we help our clients grow organically. As
                          industry-leading SaaS SEO consultants, we've honed our
                          skills over the years.
                        </Typography>
                        <Button className="primary-contained-button-1 mt-5" >
                          Get Started
                        </Button>
                      </Box>
                      {/* <Box mt={5}>
                                                <Button className='primary-contained-button-1 me-0 me-sm-3'>Jump start your growth today!</Button>
                                                <Button className='teritory-outlined-button-1 mt-4 mt-sm-0'>View our SEO portfolio</Button>
                                            </Box> */}
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                    <Box className="d-flex justify-content-center">
                      <img src="/images/abstract.png" className="img-fluid" />
                    </Box>
                  </Grid>
                  <Box
                    mt={1}
                    className="d-flex justify-content-center align-items-center"
                  ></Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default SaasHero;
