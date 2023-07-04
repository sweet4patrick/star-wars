import { Container, AppBar, Box, Toolbar, Typography } from "@mui/material";

const Nav = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Star Wars
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Nav;
