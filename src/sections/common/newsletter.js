import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const Subscribe = async (e) => {
    e.preventDefault();
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });

      if(response.status == 200) {
          setState("SUCCESS");
          setEmail("");
      }else if(response.status == 400){
        setState("ERROR");
        setErrorMessage(response.data.error);
      }
      console.log(response);
      console.log(response.status);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.error);
      setState("ERROR");
    }
  };
  return (
    <>
      <section className="sectionMargin" id="newsletter">
        <Container maxWidth="xxl">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={10}>
              <Box p={2} className="bg-primary-2 rounded-4">
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={8} style={{ position: "relative" }}>
                    <Typography variant="h2" className="text-white">
                      Subscribe to our Newsletter!
                    </Typography>
                    <Typography className="text-white">
                      Get updates from our team on the latest blogs and tools.
                    </Typography>
                    <Box className="newsForm">
                      <form onSubmit={Subscribe}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={8}>
                            <TextField
                              variant="outlined"
                              type="text" 
                              fullWidth
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              label="Enter Email"
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Button
                              className="teritory-contained-button-1"
                              type="submit"
                            >
                              Subscribe
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                      {state == "ERROR" && (
                        <p className="text-danger mt-2">{errorMessage}</p>
                      )}
                      {state == "SUCCESS" && (
                        <p className="text-success mt-2">Success</p>
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <img src="/images/newsletter.png" className="img-fluid" />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Newsletter;
