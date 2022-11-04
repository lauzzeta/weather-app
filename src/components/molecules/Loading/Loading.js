import { Box, CircularProgress, Fade } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function Loading() {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Fade
        in
        style={{ transitionDelay: 500 }}
        {...(true ? { timeout: 1000 } : {})}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: ".5rem",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      </Fade>
    </Container>
  );
}
