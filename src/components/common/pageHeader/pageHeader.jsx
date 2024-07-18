import { Box, Typography } from "@mui/material";

const PageHeader = ({img, name}) => {
    return(
        <Box
        sx={{
          height: "60vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url(${img})`,
          backgroundSize: "cover",
          imageResolution: "50%",
        }}
      >
        <Typography variant="h2" color="white">
          {name}
        </Typography>
      </Box>
    )
}

export default PageHeader;