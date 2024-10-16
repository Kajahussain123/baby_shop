import React from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  Divider
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const ShippingAddress = () => {

    const navigate = useNavigate(); 

    const handlePayNow = () => {
        navigate('/payment'); // Redirect to shipping address page
      };
  return (
   <div>
            <Header></Header>

        <Box sx={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <Grid container spacing={3}>
            {/* Shipping Address Section */}
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ padding: '20px' }}>
                <Typography variant="h6" gutterBottom>
                  1. Shipping Address
                </Typography>
    
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField label="First Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="Last Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="Address Line 1" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="Address Line 2" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="City" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="State/Province" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="Country" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="ZIP/Postal Code" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="Phone Number" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="Company (Optional)" variant="outlined" fullWidth />
                  </Grid>
    
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label="Save in address book"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
    
            {/* Order Review Section */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: '20px' }}>
                <Typography variant="h6" gutterBottom>
                  Order Review
                </Typography>
    
                <Divider sx={{ marginBottom: '20px' }} />
                <Box sx={{ marginBottom: '10px' }}>
                  <Typography variant="body1">Product Name</Typography>
                  <Typography variant="body2" color="textSecondary">
                   Shirt
                  </Typography>
                </Box>
    
                {/* Cart subtotal, shipping, and total */}
                <Box sx={{ marginBottom: '10px' }}>
                  <Typography variant="body1">Product Price</Typography>
                  <Typography variant="body2" color="textSecondary">
                    RS.600
                  </Typography>
                </Box>
    
                <Box sx={{ marginBottom: '10px' }}>
                  <Typography variant="body1">Shipping</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Free Delivery
                  </Typography>
                </Box>
    
                <Box sx={{ marginBottom: '20px' }}>
                  <Typography variant="body1">Order Total</Typography>
                  <Typography variant="h6" color="primary">
                    RS.600
                  </Typography>
                </Box>
    
    
                {/* Place Order Button */}
                <Button variant="contained" color="primary" fullWidth onClick={handlePayNow}>
                  Proceed to Buy
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Footer></Footer>
   </div>
  );
};

export default ShippingAddress;
