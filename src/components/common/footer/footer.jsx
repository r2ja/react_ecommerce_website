import { Box, Container, Grid, Typography, IconButton, Icon } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../../assets/Images/common/site-logo.png"
import React, { memo } from "react";

const Footer = React.memo(() => {
  const categories = [
    {
      title: "Shop Collections",
      items: ["Men's Jeans", "Women's Tops", "Hoodies", "Jackets", "Shoes"],
    },
    {
      title: "Latest Collection",
      items: ["Bags", "Accessories", "Shorts", "Wallets", "Sunglasses"],
    },
    {
      title: "Popular Collections",
      items: [
        "Women's Shorts",
        "Belts",
        "Watches",
        "Women's Jeans",
        "Formal Shoes",
      ],
    },
    {
      title: "Quick Links",
      items: ["Home", "Shop", "Lookbook", "About Us", "Contact Us"],
    },
  ];

  console.log("Footer Rendered")


  return (
    <>
      <Box
        component="Footer"
        sx={{ py: "5rem", bgcolor: "black", color: "white" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing="2rem">
            <Grid item xs={12} sm={3}>
              <Box sx={{ mb: "2rem" }}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
            </Grid>
            {categories.map((category) => (
                <Grid item xs={6} sm={2} key={category.title}>
                    <Typography variant="h6" gutterBottom>
                        {category.title}
                    </Typography>
                    {category.items.map((item) => (
                        <Typography variant="body2" key={item}>
                            {item}
                        </Typography>
                    ))}
                </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "white", color: "gray", p: "2rem"}}>
            <Typography variant="body2">
                Copyright © LOGO 2024
            </Typography>
            <Box>
                <IconButton color="inherit" aria-label="Facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Twitter">
                    <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Youtube">
                    <YouTubeIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Instagram">
                    <InstagramIcon />
                </IconButton>
            </Box>
            <Typography variant="body2">
                Powered by Me?
            </Typography>
          </Box>

    </>
  );
});

export default Footer;
