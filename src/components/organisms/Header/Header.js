import * as React from "react";
import { Toolbar, Typography, Slide, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

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
      <Slide
        in
        direction="down"
        {...(true ? { timeout: 500 } : {})}
        container={containerRef.current}
      >
        <IconButton component="a" href={"https://github.com/lauzzeta"}>
          <GitHubIcon />
        </IconButton>
      </Slide>
    </Toolbar>
  );
}

export default Header;
