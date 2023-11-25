import * as React from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Questions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
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
              expandIcon={<ExpandMoreIcon className="text-white"/>}
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
              expandIcon={<ExpandMoreIcon className="text-white"/>}
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
              expandIcon={<ExpandMoreIcon className="text-white"/>}
              aria-controls="panel2bh-content"
              className="bg-black text-white"
              id="panel2bh-header"
            >
              <Typography sx={{ color: "text-white bg-black" }}>
                3. How long does it take to see results from Saas SEO services ?
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
              In-depth research, creating high-quality, relevant content for user and search engine appeal.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
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
              Costs vary; we offer tailored packages. Contact us for a personalized quote based on your needs.              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
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
              Contact us for a consultation. We'll discuss objectives, assess your digital presence, and create a customized plan.            </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Container>
    </section>
  );
}
