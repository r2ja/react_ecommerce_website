import { Box, Button, Typography } from "@mui/material";
import coverPhoto from '../assets/Images/Homepage/coverPhotoTwo.jpg';

function HomePage() {
    return ( 
        <>
        <section position="fixed" maxwidth="100%">
            <Box sx={{position: 'relative', maxwidth:'100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white', backgroundImage: `url(${coverPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'}}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgb(0, 0, 0, 0.3)'
                }}/ >
                <Box sx={{
                    position: 'relative',
                    padding: '0 30px',
                    maxWidth: '1300px',
                    margin: '0 10px',
                }}
                >
                    <Typography variant="h2" component="h1" gutterBottom>
                        Experience Our
                    </Typography>
                    <Typography variant="h2" component="h1" gutterBottom>
                        New Collection
                    </Typography>
                    <Button variant="contained" color="primary" size="large" sx={{marginTop: 2, backgroundColor: 'white', color: 'black', '&:hover' : {backgroundColor: 'rgba(225, 225, 225, 0.'}}}>
                        Shop Now
                    </Button>

                </Box>
            </Box>
        </section>
        </>
     );
}

export default HomePage;