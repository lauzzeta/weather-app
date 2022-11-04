import { Box, Typography } from "@mui/material";
import React from "react";

export default function Access() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography
        variant="h5"
        color="black"
        sx={{
          mb: 2,
          fontSize: { xs: 20, sm: 20, lg: 25 },
          fontWeight: "500",
        }}
      >
        Please grant access to location to see the weather
      </Typography>
    </Box>
  );
}
