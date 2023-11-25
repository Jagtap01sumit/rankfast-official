import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
// import Box from '@mui/material/Box';
import PropTypes from "prop-types";

export default function ReadReview() {
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


  return (
    <>
      <section className="sectionMargin">
        <Container maxWidth="xxl">
          <Container maxWidth="xxl" className="m-3">
            <Typography className="d-flex justify-content-center">
          <Typography variant="h2" className="text-white p-4" style={{ width: '80%' }}>
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
    </>
  );
}
