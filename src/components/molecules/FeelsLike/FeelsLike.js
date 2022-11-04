import { Grid, Typography } from "@mui/material";
import React from "react";

export default function FeelsLike({ feelsLike }) {
  return (
    <Grid item xs={12} xl={12}>
      <Typography
        color="black"
        sx={{
          fontSize: { xs: 17, sm: 17, md: 16, xl: 17 },
          fontWeight: "500",
          ml: 2,
          mb: 1,
        }}
      >
        {/* Feels like 13.79° */}
        Feels like {feelsLike}°
      </Typography>
    </Grid>
  );
}
