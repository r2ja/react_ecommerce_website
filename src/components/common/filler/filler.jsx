import { Box, Typography, Button } from "@mui/material";

export default function Filler() {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2rem",
          flexDirection: "column",
        }}
      >
        <Box sx={{ p: "5rem 0rem", textAlign: "center" }}>
          <Typography variant="h2" color="white" textAlign="center">
            25% Off
          </Typography>
          <Typography variant="h4" color="white" textAlign="center">
            On all orders above $299
          </Typography>
          <Typography variant="h6" color="white" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
            incididunt labore dolore.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: "2rem",
              justifyContent: "center",
              backgroundColor: "darkgray",
              color: "black",
              fontSize: "14px",
              padding: "15px 25px",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            GRAB THIS OFFER
          </Button>
        </Box>
      </Box>
    </>
  );
}
