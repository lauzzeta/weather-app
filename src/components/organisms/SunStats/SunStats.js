import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Sunrise, Sunset } from "../../atoms";

export default function SunStats({ sunTime }) {
  function formatTime(time) {
    const unix_timestamp = time;
    const date = new Date(unix_timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ":" + minutes.substr(-2);
    return formattedTime;
  }

  const sunTimes = [
    {
      name: "Sunrise",
      icon: <Sunrise />,
      // value: "5:47",
      value: formatTime(sunTime?.sunrise),
    },
    {
      name: "Sunset",
      icon: <Sunset />,
      // value: "19:22",
      value: formatTime(sunTime?.sunset),
    },
  ];
  return (
    <Grid container>
      {sunTime &&
        sunTimes.map((el, i) => (
          <Grid item xs={6} sm={6} md={12} xl={12} key={i}>
            <Box sx={{ display: "flex", p: { xs: 2, md: 1.85, xl: 2.18 } }}>
              {el.icon}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  ml: 3,
                  mt: 1,
                }}
              >
                <Typography
                  color="gray"
                  sx={{
                    fontSize: { xs: 17, sm: 17, md: 15, xl: 17 },
                    fontWeight: "400",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {el.name}
                </Typography>
                <Typography
                  color="black"
                  sx={{
                    fontSize: { xs: 22, sm: 22, md: 19, xl: 22 },
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
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
