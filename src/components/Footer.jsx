import React from 'react';
import { Grid, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { Email, Facebook, Twitter, Instagram, YouTube, TikTok } from '@mui/icons-material';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#FCE4EC', padding: '40px 20px' }}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Information
          </Typography>
          <Typography variant="body2" gutterBottom>Shop Girls</Typography>
          <Typography variant="body2" gutterBottom>Clothing</Typography>
          <Typography variant="body2" gutterBottom>Shop Baby</Typography>
          <Typography variant="body2" gutterBottom>Footwear</Typography>
          <Typography variant="body2" gutterBottom>Shop Boys</Typography>
          <Typography variant="body2">Accessories</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Find In Fast
          </Typography>
          <Typography variant="body2" gutterBottom>Accessories</Typography>
          <Typography variant="body2" gutterBottom>Footwear</Typography>
          <Typography variant="body2" gutterBottom>Clothing</Typography>
          <Typography variant="body2" gutterBottom>Shop Girls</Typography>
          <Typography variant="body2" gutterBottom>Shop Baby</Typography>
          <Typography variant="body2">Shop Boys</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Need Help?
          </Typography>
          <Typography variant="h4" color="secondary" gutterBottom>
            1800 446 000
          </Typography>
          <Typography variant="body2" gutterBottom>
            561 Wellington Road, Street 32, San Francisco
          </Typography>
          <Typography variant="body2" gutterBottom>
            kidzone@wpthemego.com
          </Typography>
          <Typography variant="body2">
            Hours: 10:00 - 18:00, Mon - Sat
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Sign Up Newsletter
          </Typography>
          <Typography variant="body2" gutterBottom>
            Sign Up Newsletter & Get 20% Off First Order
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Email address"
              size="small"
              fullWidth
              sx={{ backgroundColor: 'white', borderRadius: '5px' }}
            />
            <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <IconButton href="#" color="secondary">
          <Facebook />
        </IconButton>
        <IconButton href="#" color="secondary">
          <Twitter />
        </IconButton>
        <IconButton href="#" color="secondary">
          <Instagram />
        </IconButton>
        <IconButton href="#" color="secondary">
          <YouTube />
        </IconButton>
        
      </Box>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
        KidZone ©2024. All Rights Reserved. Designed by magentech.com.
      </Typography>
    </Box>
  );
};
export default Footer;