import { Box, Typography, Button } from "@mui/material";
import CoverImageOne from "../assets/Images/aboutUs/couple-model.png";
import discount from "../assets/Images/aboutUs/discount.png";
import cloth from "../assets/Images/aboutUs/cloth.png";
import titlecover from "../assets/Images/aboutUs/cover-title.jpg";
import img1 from "../assets/Images/aboutUs/profiles/img1.jpg";
import img2 from "../assets/Images/aboutUs/profiles/img2.jpg";
import img3 from "../assets/Images/aboutUs/profiles/img3.jpg";
import img4 from "../assets/Images/aboutUs/profiles/img4.jpg";
import img5 from "../assets/Images/aboutUs/profiles/img5.jpg";
import ProfileCard from "../components/aboutUs/card";
import Footer from "../components/common/footer/footer";
import PageHeader from "../components/common/pageHeader/pageHeader";
import Filler from "../components/common/filler/filler";
import { Profiler } from "react";

// import { cloth, discount, coupleModel } from "../assets/Images/aboutUs/index"

const profiles = [
  { image: img1, name: "John Doe", profession: "Model" },
  { image: img2, name: "Ali Singh", profession: "Business" },
  { image: img3, name: "Jawad Khan", profession: "Employee" },
  { image: img4, name: "David Blaine", profession: "Footballer" },
  { image: img5, name: "C. Ronaldo", profession: "Cricketer" },
];

function handleRender(id, phase, actualDuration) {
  console.log(id, phase, actualDuration);
}

function AboutUs() {
  return (
    <>
      <Profiler id="aboutPage" onRender={handleRender}>
        <PageHeader img={titlecover} name="About Us" />

        <Box
          sx={{
            height: "50vh",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 2rem",
          }}
        >
          <Box
            sx={{
              flex: "0 0 50%",
              paddingRight: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundImage: `url(${CoverImageOne})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "500px",
              }}
            ></Box>
          </Box>

          <Box
            sx={{
              flex: "0 0 50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
            >
              <Box sx={{ marginRight: "1rem" }}>
                <img
                  src={cloth}
                  alt="Discount"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Box>
                <Typography variant="h4">Sale on latest fashion</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
            >
              <Box sx={{ marginRight: "1rem" }}>
                <img
                  src={discount}
                  alt="Discount"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Box>
                <Typography variant="h4">Sale on latest fashion</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Filler />
        <Box
          sx={{
            height: "auto",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ p: "5rem 0" }}>
            <Typography variant="h4" textAlign="center">
              {" "}
              They love us.{" "}
            </Typography>
            <Typography variant="h6" textAlign="center">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {profiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </Box>
        </Box>

        <Box sx={{ pt: "5rem" }}>
          <Footer />
        </Box>
      </Profiler>
    </>
  );
}

export default AboutUs;
