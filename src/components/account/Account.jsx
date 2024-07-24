import React from 'react';
import { Typography, Container, Avatar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { useAuth } from '../../contexts/authContext';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    logout();
    navigate('/');
  };

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Account Page
        </Typography>
        <Avatar
          src={user.profilePicture}
          alt={user.name}
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Typography variant="h6" gutterBottom>
          Name: {user.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {user.email}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          sx={{ mt: 2 }}
        >
          Log Out
        </Button>
      </Box>
    </Container>
  );
};

export default Account;