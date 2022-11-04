import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  Clouds,
  Humidity,
  Pressure,
  Thermometer,
  Visibility,
  Wind,
} from "../../atoms";

export default function WeatherStats({ weather }) {
  const stats = [
    {
      name: "Max/Min",
      icon: <Thermometer />,
      // value: "27°/8°",
      value: `${weather?.main.temp_max}°/${weather?.main.temp_min}°`,
    },
    {
      name: "Humidity",
      icon: <Humidity />,
      // value: "39%",
      value: `${weather?.main.humidity}%`,
    },
    {
      name: "Pressure",
      icon: <Pressure />,
      // value: "1053 hPa",
      value: `${weather?.main.pressure} hPa`,
    },
    {
      name: "Wind speed",
      icon: <Wind />,
      // value: "5 mts/s",
      value: `${weather?.wind.speed} mts/s`,
    },
    {
      name: "Visibility",
      icon: <Visibility />,
      // value: "10km",
      value: `${weather?.visibility / 1000}km`,
    },
    {
      name: "Clouds",
      icon: <Clouds />,
      // value: "2%",
      value: `${weather?.clouds.all}%`,
    },
  ];
  return (
    <Grid container>
      {weather &&
        stats.map((el, i) => (
          <Grid item xs={6} sm={4} md={6} xl={6} key={i}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: { xs: 1.5, sm: 1.14, md: 1.34, xl: 1.37 },
              }}
            >
              <Box sx={{ display: "flex" }}>{el.icon}</Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: 1,
                }}
              >
                <Typography
                  color="gray"
                  sx={{
                    fontSize: { xs: 14, sm: 12, md: 13, xl: 14 },
                    fontWeight: "400",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    ml: 1,
                  }}
                >
                  {el.name}
                </Typography>
                <Typography
                  color="black"
                  sx={{
                    fontSize: { xs: 18, sm: 16, md: 17, xl: 18 },
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    ml: 1,
                  }}
                >
                  {el.value}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
}
