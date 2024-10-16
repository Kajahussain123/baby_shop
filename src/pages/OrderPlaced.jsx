import React from 'react';
import { Box, Typography, Button, Paper, Grid, Divider, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderPlaced = () => {
  return (
    <div>
        <Header></Header>
        <Box sx={{ padding: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {/* Confirmation Message */}
          <Paper elevation={3} sx={{ padding: '30px', borderRadius: '10px' }}>
            <IconButton color="success" sx={{ fontSize: '50px' }}>
              <CheckCircleIcon fontSize="inherit" />
            </IconButton>
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}>
              Order Placed Successfully!
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '30px' }}>
              Thank you for shopping with us! Your order has been placed successfully and will be processed soon.
            </Typography>
    
            {/* Order Summary */}
            <Divider sx={{ marginBottom: '20px' }} />
            <Grid container spacing={2}>
              <Grid item xs={6} textAlign="left">
                <Typography variant="body1"><strong>Order Number:</strong> 123456789</Typography>
                <Typography variant="body1"><strong>Order Date:</strong> Sept 10, 2024</Typography>
                <Typography variant="body1"><strong>Total Amount:</strong> $249.99</Typography>
              </Grid>
              <Grid item xs={6} textAlign="left">
                <Typography variant="body1"><strong>Shipping Address:</strong></Typography>
                <Typography variant="body2">John Doe</Typography>
                <Typography variant="body2">123 Street Name</Typography>
                <Typography variant="body2">City, State, 12345</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ marginTop: '20px', marginBottom: '30px' }} />
    
            {/* Continue Shopping and View Order Details Buttons */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ShoppingCartIcon />}
                  fullWidth
                  href="/shop"
                >
                  Continue Shopping
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<ListAltIcon />}
                  fullWidth
                  href="/order-details"
                >
                  View Order Details
                </Button>
              </Grid>
            </Grid>
          </Paper>
    
          {/* Home Button */}
          <Button
            variant="outlined"
            startIcon={<HomeIcon />}
            href="/"
            sx={{ marginTop: '30px' }}
          >
            Go to Home
          </Button>
        </Box>
        <Footer></Footer>
    </div>
  );
};

export default OrderPlaced;
