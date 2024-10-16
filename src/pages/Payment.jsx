import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Divider,
  RadioGroup,
  Radio,
  IconButton,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PayPalIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // COD icon
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate(); 


  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleOrderPlaced = () => {
    navigate('/orderplaced'); // Redirect to shipping address page
  };

  return (
    <div>
        <Header></Header>
        <Box sx={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <Grid container spacing={3}>
            {/* Left Side - Image */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: '20px', height: '100%' }}>
                <Box
                  component="img"
                  src="https://via.placeholder.com/500" // Replace with actual image URL
                  alt="Payment Option"
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            </Grid>
    
            {/* Right Side - Payment Options */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: '20px' }}>
                <Typography variant="h6" gutterBottom>
                  Payment Options
                </Typography>
                <Divider sx={{ marginBottom: '20px' }} />
    
                {/* Payment Method Selection */}
                <RadioGroup value={selectedPayment} onChange={handlePaymentChange}>
                  {/* Credit Card Option */}
                  <FormControlLabel
                    value="creditCard"
                    control={<Radio color="primary" />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                          <CreditCardIcon color="primary" />
                        </IconButton>
                        <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                          Credit/Debit Card
                        </Typography>
                      </Box>
                    }
                  />
    
                  {/* PayPal Option */}
                  <FormControlLabel
                    value="paypal"
                    control={<Radio color="primary" />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                          <PayPalIcon color="primary" />
                        </IconButton>
                        <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                          PayPal
                        </Typography>
                      </Box>
                    }
                  />
    
                  {/* Net Banking/UPI Option */}
                  <FormControlLabel
                    value="netBanking"
                    control={<Radio color="primary" />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                          <PaymentIcon color="primary" />
                        </IconButton>
                        <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                          Net Banking / UPI
                        </Typography>
                      </Box>
                    }
                  />
    
                  {/* Cash on Delivery (COD) Option */}
                  <FormControlLabel
                    value="cod"
                    control={<Radio color="primary" />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                          <LocalShippingIcon color="primary" />
                        </IconButton>
                        <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                          Cash on Delivery (COD)
                        </Typography>
                      </Box>
                    }
                  />
                </RadioGroup>
    
                {/* Coupon Code Field */}
                <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
                  <Typography variant="body1">
                    Have a coupon? Enter code below:
                  </Typography>
                  <TextField
                    variant="outlined"
                    placeholder="Coupon Code"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <LocalOfferIcon sx={{ marginRight: '8px', color: 'gray' }} />
                      ),
                    }}
                    sx={{ marginTop: '10px' }}
                  />
                </Box>
    
                {/* Save this information Checkbox */}
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Save this payment method for future use"
                  sx={{ marginBottom: '20px' }}
                />
    
                {/* Place Order Button */}
                <Button variant="contained" color="primary" fullWidth onClick={handleOrderPlaced}>
                  Place Order
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Footer></Footer>
    </div>
  );
};

export default PaymentOptions;
