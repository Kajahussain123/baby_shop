import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Tabs,
  Tab,
  IconButton,
  Divider,
  Chip
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState('https://via.placeholder.com/400x500');
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate(); 
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const thumbnailImages = [
    'https://via.placeholder.com/100x100?text=1',
    'https://via.placeholder.com/100x100?text=2',
    'https://via.placeholder.com/100x100?text=3'
  ];

  const handleBuyNow = () => {
    navigate('/shipping'); // Redirect to shipping address page
  };
  return (
    <div>
        <Header></Header>
        <Box sx={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <Grid container spacing={4}>
            {/* Product Images */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: '20px' }}>
                <img src={selectedImage} alt="Product" style={{ width: '100%' }} />
                <Grid container spacing={2} mt={2}>
                  {thumbnailImages.map((image, index) => (
                    <Grid item xs={4} key={index}>
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        style={{ width: '100%', cursor: 'pointer' }}
                        onClick={() => setSelectedImage(image)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
            {/* Product Details */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Aut Odit Aut Fugit Dolor Sit Amet
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                SKU: 104-01
              </Typography>
              <Box mb={2}>
                <Typography variant="body2" color="textSecondary">
                  Availability: <Typography variant="body1" component="span">In stock</Typography>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="h6" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                  $135.00
                </Typography>
                <Typography variant="h4" color="primary">
                  $100.00
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Quantity:
                </Typography>
                <input type="number" defaultValue={1} min={1} max={10} style={{ width: '50px', marginRight: '20px' }} />
                <IconButton color="primary" aria-label="add to cart" sx={{ marginRight: '10px' }}>
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add to wishlist">
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
              <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
                Add to Cart
              </Button>
              <Button variant="outlined" fullWidth onClick={handleBuyNow}>
                Buy Now
              </Button>
              <Box mt={2} display="flex" alignItems="center">
                <Chip label="New" color="success" sx={{ mr: 1 }} />
                <Chip label="Sale" color="error" />
              </Box>
              <Divider sx={{ my: 4 }} />
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Category: <Typography variant="body1" component="span">Baby, Shop Baby</Typography>
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={2}>
                  Share:
                </Typography>
                <Box mt={1}>
                  <Button size="small" color="primary">Facebook</Button>
                  <Button size="small" color="primary">Twitter</Button>
                  <Button size="small" color="primary">Pinterest</Button>
                  <Button size="small" color="primary">Reddit</Button>
                  <Button size="small" color="primary">Telegram</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* Product Description and Reviews */}
          <Box mt={4}>
            <Paper elevation={3} sx={{ padding: '20px' }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Description" />
                <Tab label="Additional Information" />
                <Tab label="Reviews (0)" />
              </Tabs>
              <Box p={3}>
                {tabValue === 0 && (
                  <Typography variant="body2" color="textSecondary">
                    This is the product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at urna et leo convallis accumsan. Sed euismod...
                  </Typography>
                )}
                {tabValue === 1 && (
                  <Typography variant="body2" color="textSecondary">
                    This is additional information about the product. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
                  </Typography>
                )}
                {tabValue === 2 && (
                  <Typography variant="body2" color="textSecondary">
                    There are currently no reviews for this product. Be the first to review!
                  </Typography>
                )}
              </Box>
            </Paper>
          </Box>
        </Box>
        <Footer></Footer>
    </div>
  );
};
export default ProductDetail;