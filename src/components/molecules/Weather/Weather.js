import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Weather({ weather }) {
  return (
    <Grid item xs={12} xl={12}>
      <Typography
        color="primary.main"
        sx={{
          fontSize: { xs: 80, sm: 80, md: 65, xl: 70 },
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
