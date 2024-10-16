import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Avatar,
  TextField,
  Button,
  Link,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Footer from '../components/Footer';
import Header from '../components/Header';

const RegisterPage = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'url(https://i.postimg.cc/6q6Hsnb4/baby-s-sock-pair-woolen-shoes-pacifier-cap-milk-bottle-toy-orange-background.jpg)',
          padding: '16px', // Padding for small screens
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 400, // Limit max width for larger screens
            padding: { xs: '16px', sm: '32px' }, // Responsive padding
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent white background
            backdropFilter: 'blur(10px)', // Apply background blur
          }}
          
        >
          <Avatar
            sx={{
              margin: '0 auto 16px',
              backgroundColor: '#3949ab',
              width: 56,
              height: 56,
            }}
          >
            <LockOutlinedIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Register
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="First Name"
              InputProps={{
                sx: {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Last Name"
              InputProps={{
                sx: {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email ID"
              InputProps={{
                sx: {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
              label="Password"
              InputProps={{
                sx: {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
              label="Confirm Password"
              InputProps={{
                sx: {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                padding: '12px',
                borderRadius: '30px',
                backgroundColor: '#3949ab',
                '&:hover': {
                  backgroundColor: '#283593',
                },
              }}
            >
              REGISTER
            </Button>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ color: '#666666' }}>
                Already have an account?{' '}
                <Link href="/login" variant="body2" sx={{ color: '#3949ab' }}>
                  Login here
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </div>
  );
};

export default RegisterPage;
