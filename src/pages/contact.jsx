import PageHeader from "../components/common/pageHeader/pageHeader";
import coverImage from "../assets/Images/contactUs/CoverPhoto.jpg";
import { Typography, Box, Grid, Paper } from "@mui/material";
import ContactForm from "../components/contactUs/Form/form";
import Filler from "../components/common/filler/filler";
import Footer from "../components/common/footer/footer";

function ContactUs() {
  return (
    <>
      <PageHeader img={coverImage} name="Contact Us" />
      <Box sx={{ p: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
              <ContactForm />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <Paper elevation={5} sx={{ p: 3, borderRadius: 4 }}>
                  <Typography variant="h5" gutterBottom>Quick Links</Typography>
                  {["Home", "Shop", "Lookbook", "About Us", "Contact Us"].map((item) => (
                    <Typography key={item} variant="body2" sx={{ mb: 1 }}>{item}</Typography>
                  ))}
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={5} sx={{ p: 3, borderRadius: 4 }}>
                  <Typography variant="h5" gutterBottom>Latest Collections</Typography>
                  {["Women's Shorts", "Belts", "Watches", "Women's Jeans", "Formal Shoes"].map((item) => (
                    <Typography key={item} variant="body2" sx={{ mb: 1 }}>{item}</Typography>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Filler />

      <Box sx={{p: "8rem 5rem"}}>
        Placeholder
      </Box>

      <Footer />
    </>
  );
}

export default ContactUs;