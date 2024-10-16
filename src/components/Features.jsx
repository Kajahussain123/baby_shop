import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import ReplayIcon from '@mui/icons-material/Replay';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const features = [
  {
    icon: <LocalShippingIcon fontSize="large" color="primary" />,
    title: 'Free delivery',
    description: 'Free shipping for all orders',
  },
  {
    icon: <PaymentIcon fontSize="large" color="primary" />,
    title: '100% Payment Secure',
    description: 'Payment 100% secured',
  },
  {
    icon: <ReplayIcon fontSize="large" color="primary" />,
    title: '14 Days Return',
    description: 'You have 14 days to return',
  },
  {
    icon: <SupportAgentIcon fontSize="large" color="primary" />,
    title: 'Support 24/7',
    description: 'We support 24 hours a day',
  },
];

const Features = () => {
  return (
    <Box sx={{ padding: '20px', }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                border: '1px solid #ddd', // Border color
                borderRadius: '8px', // Rounded corners
                padding: '20px', // Padding inside the border
                backgroundColor: '#fff', // Background color inside the border
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for a lifted effect
              }}
            >
              {feature.icon}
              <Typography variant="h6" component="div" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
