import { Fade, Grid, Paper, Container, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  ForecastDateTime,
  ForecastFeelsLike,
  ForecastWeather,
  ForecastWeatherStatus,
} from "../../molecules";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Forecast({ forecast }) {
  const [currentDay, setCurrentDay] = useState();

  useEffect(() => {
    const date = new Date();
    setCurrentDay(date.getDay());
  }, []);

  function formatTime(date) {
    const format = new Date(date * 1000);
    const day = format.getDay();
    return days[day];
  }

  return (
    forecast && (
      <>
        {forecast[currentDay]?.length > 0 && (
          <Container
            sx={{
              mb: "2rem",
            }}
          >
            <Fade
              in
              style={{ transitionDelay: 500 }}
              {...(true ? { timeout: 1000 } : {})}
            >
              <Typography
                color="black"
                sx={{
                  fontSize: { xs: 22, sm: 22, md: 20, xl: 22 },
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    xl: "left",
                  },
                  display: "flex",
                  mb: 1,
                }}
              >
                Today
              </Typography>
            </Fade>
            <Box sx={{ display: "flex" }}>
              <Fade
                in
                style={{ transitionDelay: 500 }}
                {...(true ? { timeout: 1000 } : {})}
              >
                <Grid item xs={12} md={12} xl={12}>
                  <Grid container spacing={2}>
                    {forecast[currentDay]?.map((el, i) => (
                      <Grid item xs={6} sm={6} md={3} xl={3} key={i}>
                        <Paper
                          sx={{
                            width: "100%",
                            userSelect: "none",
                            backgroundColor: "transparent",
                            backdropFilter:
                              "blur(20px) saturate(100%) brightness(100%)",
                            borderRadius: 1,
                          }}
                        >
                          <Grid container>
                            <ForecastWeatherStatus
                              image={el.weather[0]?.icon}
                              status={el.weather[0]?.main}
                            />
                            <ForecastDateTime date={el?.dt} />
                            <ForecastWeather weather={el.main?.temp} />
                            <ForecastFeelsLike
                              feelsLike={el.main?.feels_like}
                            />
                          </Grid>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Fade>
            </Box>
          </Container>
        )}
        {forecast[currentDay === 6 ? 0 : currentDay + 1]?.length > 0 && (
          <Container
            sx={{
              mb: "2rem",
            }}
          >
            <Fade
              in
              style={{ transitionDelay: 500 }}
              {...(true ? { timeout: 1000 } : {})}
            >
              <Typography
                color="black"
                sx={{
                  fontSize: { xs: 22, sm: 22, md: 20, xl: 22 },
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    xl: "left",
                  },
                  display: "flex",
                  mb: 1,
                }}
              >
                Tomorrow
              </Typography>
            </Fade>
            <Box sx={{ display: "flex" }}>
              <Fade
                in
                style={{ transitionDelay: 500 }}
                {...(true ? { timeout: 1000 } : {})}
              >
                <Grid item xs={12} md={12} xl={12}>
                  <Grid container spacing={2}>
                    {forecast[currentDay === 6 ? 0 : currentDay + 1]?.map(
                      (el, i) => (
                        <Grid item xs={6} sm={6} md={3} xl={3} key={i}>
                          <Paper
                            sx={{
                              width: "100%",
                              userSelect: "none",
                              backgroundColor: "transparent",
                              backdropFilter:
                                "blur(20px) saturate(100%) brightness(100%)",
                              borderRadius: 1,
                            }}
                          >
                            <Grid container>
                              <ForecastWeatherStatus
                                image={el.weather[0]?.icon}
                                status={el.weather[0]?.main}
                              />
                              <ForecastDateTime date={el?.dt} />
                              <ForecastWeather weather={el.main?.temp} />
                              <ForecastFeelsLike
                                feelsLike={el.main?.feels_like}
                              />
                            </Grid>
                          </Paper>
                        </Grid>
                      )
                    )}
                  </Grid>
                </Grid>
              </Fade>
            </Box>
          </Container>
        )}
        {forecast[currentDay === 6 ? 1 : currentDay === 5 ? 0 : currentDay + 2]
          ?.length > 0 && (
          <Container
            sx={{
              mb: "2rem",
            }}
          >
            <Fade
              in
              style={{ transitionDelay: 500 }}
              {...(true ? { timeout: 1000 } : {})}
            >
              <Typography
                color="black"
                sx={{
                  fontSize: { xs: 22, sm: 22, md: 20, xl: 22 },
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    xl: "left",
                  },
                  display: "flex",
                  mb: 1,
                }}
              >
                {forecast &&
                  formatTime(
                    forecast[
                      currentDay === 6
                        ? 1
                        : currentDay === 5
                        ? 0
                        : currentDay + 2
                    ][0].dt
                  )}
              </Typography>
            </Fade>
            <Box sx={{ display: "flex" }}>
              <Fade
                in
                style={{ transitionDelay: 500 }}
                {...(true ? { timeout: 1000 } : {})}
              >
                <Grid item xs={12} md={12} xl={12}>
                  <Grid container spacing={2}>
                    {forecast[
                      currentDay === 6
                        ? 1
                        : currentDay === 5
                        ? 0
                        : currentDay + 2
                    ]?.map((el, i) => (
                      <Grid item xs={6} sm={6} md={3} xl={3} key={i}>
                        <Paper
                          sx={{
                            width: "100%",
                            userSelect: "none",
                            backgroundColor: "transparent",
                            backdropFilter:
                              "blur(20px) saturate(100%) brightness(100%)",
                            borderRadius: 1,
                          }}
                        >
                          <Grid container>
                            <ForecastWeatherStatus
                              image={el.weather[0]?.icon}
                              status={el.weather[0]?.main}
                            />
                            <ForecastDateTime date={el?.dt} />
                            <ForecastWeather weather={el.main?.temp} />
                            <ForecastFeelsLike
                              feelsLike={el.main?.feels_like}
                            />
                          </Grid>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Fade>
            </Box>
          </Container>
        )}
        {forecast[
          currentDay === 6
            ? 2
            : currentDay === 5
            ? 1
            : currentDay === 4
            ? 0
            : currentDay + 3
        ]?.length > 0 && (
          <Container
            sx={{
              mb: "2rem",
            }}
          >
            <Fade
              in
              style={{ transitionDelay: 500 }}
              {...(true ? { timeout: 1000 } : {})}
            >
              <Typography
                color="black"
                sx={{
                  fontSize: { xs: 22, sm: 22, md: 20, xl: 22 },
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    xl: "left",
                  },
                  display: "flex",
                  mb: 1,
                }}
              >
                {forecast &&
                  formatTime(
                    forecast[
                      currentDay === 6
                        ? 2
                        : currentDay === 5
                        ? 1
                        : currentDay === 4
                        ? 0
                        : currentDay + 3
                    ][0].dt
                  )}
              </Typography>
            </Fade>
            <Box sx={{ display: "flex" }}>
              <Fade
                in
                style={{ transitionDelay: 500 }}
                {...(true ? { timeout: 1000 } : {})}
              >
                <Grid item xs={12} md={12} xl={12}>
                  <Grid container spacing={2}>
                    {forecast[
                      currentDay === 6
                        ? 2
                        : currentDay === 5
                        ? 1
                        : currentDay === 4
                        ? 0
                        : currentDay + 3
                    ]?.map((el, i) => (
                      <Grid item xs={6} sm={6} md={3} xl={3} key={i}>
                        <Paper
                          sx={{
                            width: "100%",
                            userSelect: "none",
                            backgroundColor: "transparent",
                            backdropFilter:
                              "blur(20px) saturate(100%) brightness(100%)",
                            borderRadius: 1,
                          }}
                        >
                          <Grid container>
                            <ForecastWeatherStatus
                              image={el.weather[0]?.icon}
                              status={el.weather[0]?.main}
                            />
                            <ForecastDateTime date={el?.dt} />
                            <ForecastWeather weather={el.main?.temp} />
                            <ForecastFeelsLike
                              feelsLike={el.main?.feels_like}
                            />
                          </Grid>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Fade>
            </Box>
          </Container>
        )}
      </>
    )
  );
}
