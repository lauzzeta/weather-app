import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function WeatherImage({ image, status }) {
  return (
    <Grid item xs={4} sm={4} md={5} xl={5}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          mr: 2,
        }}
      >
        <Avatar
          src={`http://openweathermap.org/img/w/${image}.png`}
          // src={`http://openweathermap.org/img/w/01n.png`}
          variant="rounded"
          alt=""
          sx={{
            width: { xs: 50, md: 50, xl: 50 },
            height: { xs: 50, md: 50, xl: 50 },
          }}
        />
        <Typography
          color="gray"
          sx={{
            fontSize: { xs: 14, sm: 14, md: 13, xl: 14 },
            fontWeight: "400",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          Clear
          {/* {status} */}
        </Typography>
      </Box>
    </Grid>
  );
}
