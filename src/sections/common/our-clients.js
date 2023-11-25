import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/router";

const OurClient = () => {
  const router = useRouter();
  const clients = [
    "/images/clients/aspert.png",
    "/images/clients/builderai.png",
    "/images/clients/byjus.png",
    "/images/clients/konch.png",
    "/images/clients/lead.png",
    "/images/clients/living.png",
    "/images/clients/notify.png",
    "/images/clients/pepper.png",
    "/images/clients/bvc.png",
    "/images/clients/Edu.png",
    "/images/clients/teacherbot.png",
  ];
  const path = router.pathname === "/services/saas-seo-service";

  return (
    <>
      <section className="sectionMargin">
        <Container maxWidth="xxl">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={11}>
              <Box py={2}>
                {path ? (
                  <Box>
                    <Typography
                      variant="h2"
                      className="text-white  justify-content-center text-center"
                      //   className="text-white secTitleSmall "
                      gutterBottom
                    >
                      We've driven impact for X+ SaaS Companies and Generated
                      Revenue via SEO & Content
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      variant="h2"
                      className="text-white secTitleSmall"
                      gutterBottom
                    >
                      Our Clients
                    </Typography>
                  </Box>
                )}

                <Box>
                  <Marquee direction="right">
                    {clients.map((item, index) => (
                      <Box key={`client-${index}`} className="clientBox">
                        <img src={item} className="img-fluid" />
                      </Box>
                    ))}
                  </Marquee>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default OurClient;
