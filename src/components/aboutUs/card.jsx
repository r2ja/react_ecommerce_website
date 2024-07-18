import { Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
 
const ProfileCard = ({ image, name, profession }) => {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{ filter: 'brightness(0.3)' }}
        color='white'
        
      />
      <IconButton
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        }}
      >
        <PlayArrowIcon sx={{ color: 'white' }} />
      </IconButton>
      <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, color: 'white' }}>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          {profession}
        </Typography>
      </CardContent>
    </Card>
  );
};
 
export default ProfileCard;