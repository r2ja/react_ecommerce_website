import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./rootLayout.css";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from '../contexts/authContext';
import Cart from '../components/common/cart/cart';

export default function RootLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const cartQuantity = useSelector(state => state.cart ? state.cart.totalQuantity : 0);
  const [cartOpen, setCartOpen] = useState(false);

  const handleLoginClick = () => {
    if (user) {
      navigate('/account');
    } else {
      navigate('/login');
    }
  };

  const handleCartClick = () => {
    setCartOpen(true);
  };

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
          <IconButton 
            size="large" 
            edge="start" 
            color="inherit" 
            sx={{mr: 2}}
            onClick={handleLoginClick}
          >
            {user ? (
              <Avatar src={user.profilePicture} alt={user.name} />
            ) : (
              <LoginIcon />
            )}
          </IconButton>
          <IconButton 
            size="large" 
            edge="start" 
            color="inherit" 
            sx={{mr: 2}}
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartQuantity} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main style={{ paddingTop: '64px', maxWidth: '100%' }}>
        <Outlet />
      </main>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}