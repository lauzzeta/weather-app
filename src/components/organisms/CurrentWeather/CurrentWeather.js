import { Fade, Grid, Paper, Container, Box } from "@mui/material";
import React from "react";
import {
  CityName,
  DateTime,
  FeelsLike,
  Weather,
  WeatherImage,
} from "../../molecules";
import SunStats from "../SunStats";
import WeatherStats from "../WeatherStats";

export default function CurrentWeather({ weather }) {
  return (
    weather && (
      <Container sx={{ mt: "2rem", mb: "2rem" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Fade
            in
            style={{ transitionDelay: 500 }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Grid item xs={12} md={12} xl={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} xl={4}>
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
                      <CityName name={weather?.name} />
                      <WeatherImage
                        image={weather?.weather[0].icon}
                        status={weather?.weather[0].main}
                      />
                      <DateTime date={weather?.dt} />
                      <Weather weather={weather?.main.temp} />
                      <FeelsLike feelsLike={weather?.main.feels_like} />
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={5} xl={5}>
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
                    <WeatherStats weather={weather} />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={3} xl={3}>
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
                    <SunStats sunTime={weather?.sys} />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Fade>
        </Box>
      </Container>
    )
  );
}
