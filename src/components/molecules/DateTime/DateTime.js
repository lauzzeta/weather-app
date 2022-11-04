import { Grid, Typography } from "@mui/material";
import React from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function DateTime({ date }) {
  let unix_timestamp = date;
  const format = new Date(unix_timestamp * 1000);
  const hours = format.getHours();
  const minutes = "0" + format.getMinutes();
  const day = days[format.getDay()];
  const formattedTime = day + " " + hours + ":" + minutes.substr(-2);
  return (
    <Grid item xs={12} xl={12}>
      <Typography
        color="gray"
        sx={{
          fontSize: { xs: 14, sm: 14, md: 13, xl: 14 },
          fontWeight: "400",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          ml: 2,
        }}
      >
        {/* Thursday 1:28 */}
        {formattedTime}
      </Typography>
    </Grid>
  );
}
