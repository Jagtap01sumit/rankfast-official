import {
  Audit,
  BigProjects,
  Head,
  Hero,
  Newsletter,
  OurClient,
  Revenue,
  Services,
  Team,
  WhyRankfast,
} from "@/sections";
import Questions from "@/sections/home/questions";
import ReadReview from "@/sections/home/read-review";
import React from "react";
import SassServices from "./services/saas-seo-service";

const Home = () => {
  return (
    <>
      <Head
        title="Rankfast - Leading SEO Agency for Customized Online Solutions"
        description="Rankfast is a top SEO agency that provides customized solutions to improve your online presence and search engine rankings. Their services include SEO, content marketing, link building, UI UX design, and more. They are also committed to education, offering free online courses through their search engine Coursenator."
        keywords="SEO agency, online presence, search engine optimization, content marketing, link building, UI UX design, education, Coursenator"
        robots="index"
        canonical="/"
      />
      <Hero />
      <OurClient />
      <BigProjects />
      <Services />
      <Revenue />
      <WhyRankfast />
      <Audit />

      <Team />
      {/* <ReadReview/> */}
      {/* <SassServices/> */}
      {/* <Questions /> */}
    </>
  );
};

export default Home;
