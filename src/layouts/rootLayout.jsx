import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  createTheme,
  ThemeProvider,
  IconButton,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function RootLayout() {
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "black" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{ ml: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/shop">
              Shop
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact Us
            </Button>
          </Box>
          <IconButton size="large" edge="start" color="inherit" sx={{mr: 2}}>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main maxwidth="100%">
        <Outlet />
      </main>
    </>
  );
}
