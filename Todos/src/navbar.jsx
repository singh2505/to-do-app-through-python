import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";

function Topnav() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ListAltIcon></ListAltIcon>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TODO's
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topnav;
