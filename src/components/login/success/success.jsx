import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';

const LoginSuccess = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="sm" justifyContent="center" alignItems="center">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography component="h1" variant="h5">
          Login Successful
        </Typography>
        <Avatar
          src={user.profilePicture}
          alt={user.name}
          sx={{ width: 100, height: 100, mt: 2 }}
        />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Welcome, {user.name}
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginSuccess;