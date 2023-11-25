import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "@/redux/action/teamAction";

const Team = () => {
  const { team } = useSelector((state) => state.teamReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeam());
  }, [dispatch]);

  const predefinedOrder = [
    "Pranav Bajaj",
    "Pranay Mishra",
    "Tripti Pahwa",
    "Adarsh Giri",
    "Abhijay Rajput",
  ];

  // Check if team is iterable and not null/undefined/empty before sorting
  const sortedTeam =
    Array.isArray(team) && team.length > 0
      ? [...team].sort((a, b) => {
          const aIndex = predefinedOrder.indexOf(a.name);
          const bIndex = predefinedOrder.indexOf(b.name);

          if (aIndex !== -1 && bIndex !== -1) {
            return aIndex - bIndex;
          }

          if (aIndex !== -1) {
            return -1;
          }
          if (bIndex !== -1) {
            return 1;
          }

          return 0;
        })
      : [];

  return (
    <>
      <section className="sectionMargin">
        <Container maxWidth="xxl">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={11}>
              <Box py={2}>
                <Box mb={5}>
                  <Typography variant="h2" className="text-white">
                    Our Team Of Experts
                  </Typography>
                </Box>
                <Box>
                  <Grid container spacing={3}>
                    {sortedTeam &&
                      sortedTeam !== null &&
                      sortedTeam !== undefined &&
                      sortedTeam !== "" &&
                      sortedTeam.length > 0 &&
                      sortedTeam.map((t) => (
                        <Grid key={t._id} item xs={6} sm={4} md={3}>
                          <Card
                            className="teamCard"
                            sx={{ height: "100%", overflow: "visible" }}
                          >
                            <CardContent
                              sx={{ overflow: "visible", height: "100%" }}
                            >
                              <Box>
                                <Box
                                  mb={2}
                                  className="d-flex justify-content-center align-items-center"
                                >
                                  <Box className="teamImgCircle">
                                    {t &&
                                      t.image &&
                                      Object.keys(t.image).length > 0 &&
                                      t.image.asset &&
                                      Object.keys(t.image.asset).length > 0 &&
                                      t.image.asset._ref && (
                                        <img
                                          src={`https://cdn.sanity.io/images/cyz6zl3a/production/${
                                            t.image.asset._ref.split("-")[1]
                                          }-${
                                            t.image.asset._ref.split("-")[2]
                                          }.${
                                            t.image.asset._ref.split("-")[3]
                                          }`}
                                          className="img-fluid"
                                        />
                                      )}
                                  </Box>
                                </Box>
                                <Typography
                                  variant="h4"
                                  className="text-white"
                                  align="center"
                                  gutterBottom
                                >
                                  {t.name}
                                </Typography>
                                <Typography
                                  className="text-white"
                                  align="center"
                                >
                                  {t.designation}
                                </Typography>
                              </Box>
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
    </>
  );
};

export default Team;
