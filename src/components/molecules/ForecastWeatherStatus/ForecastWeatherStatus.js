import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function ForecastWeatherStatus({ image, status }) {
  return (
    <Grid item xs={12} sm={12} md={12} xl={12}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          mr: 2,
        }}
      >
        <Avatar
          src={`http://openweathermap.org/img/w/${image}.png`}
          //   src={`http://openweathermap.org/img/w/01n.png`}
          variant="rounded"
          alt=""
          sx={{
            width: { xs: 50, md: 50, xl: 50 },
            height: { xs: 50, md: 50, xl: 50 },
          }}
        />
        <Typography
          color="black"
          sx={{
            fontSize: { xs: 16, sm: 16, md: 15, xl: 16 },
            fontWeight: "500",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {/* Clear */}
          {status}
        </Typography>
      </Box>
    </Grid>
  );
}
