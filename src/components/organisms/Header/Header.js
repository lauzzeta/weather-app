import * as React from "react";
import { Toolbar, Typography, Slide } from "@mui/material";

function Header() {
  const containerRef = React.useRef(null);
  return (
    <Toolbar
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        mb: 2,
        overflow: "hidden",
      }}
      ref={containerRef}
    >
      <Slide
        in
        direction="down"
        {...(true ? { timeout: 500 } : {})}
        container={containerRef.current}
      >
        <Typography
          component="h2"
          variant="h5"
          color="black"
          align="center"
          noWrap
          sx={{ flex: 1, fontWeight: "600" }}
        >
          Live Weather
        </Typography>
      </Slide>
    </Toolbar>
  );
}

export default Header;
