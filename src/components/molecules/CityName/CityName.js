import { Grid, Typography } from "@mui/material";
import React from "react";

export default function CityName({ name }) {
  return (
    <Grid item xs={8} sm={8} md={7} xl={7}>
      <Typography
        color="black"
        sx={{
          fontSize: { xs: 18, sm: 18, md: 17, xl: 18 },
          fontWeight: "500",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          ml: 2,
          mt: 1,
        }}
      >
        {/* La Plata */}
        {name}
      </Typography>
    </Grid>
  );
}
