import { Grid, Typography } from "@mui/material";
import React from "react";

export default function ForecastWeather({ weather }) {
  return (
    <Grid item xs={12} xl={12}>
      <Typography
        color="primary.main"
        sx={{
          fontSize: { xs: 40, sm: 40, md: 35, xl: 40 },
          fontWeight: "600",
          ml: 2,
        }}
      >
        {/* 15.84° */}
        {weather}°
      </Typography>
    </Grid>
  );
}
