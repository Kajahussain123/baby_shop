import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Header from '../components/Header';

const products = [
  { id: 1, title: 'Feeding Bottles', price: '$320.00', image: 'https://i.postimg.cc/Yq9Hn2Jg/cat-5.jpg' },
  { id: 2, title: 'Critter Clinic Shoes', price: '$240.00', image: 'https://i.postimg.cc/dQGBb8Kc/cat-1.jpg' },
  { id: 3, title: 'Deuter Black Tour Bag', price: '$300.00', image: 'https://i.postimg.cc/zvd3stzk/cat-2.jpg' },
  { id: 4, title: 'Flip & Surprise ', price: '$100.00', image: 'https://i.postimg.cc/0QB6zXSH/cat-4.jpg' },
  { id: 5, title: 'Front Tie Raised', price: '$765.00', image: 'https://i.postimg.cc/Yq9Hn2Jg/cat-5.jpg' },
  { id: 6, title: 'Flowy Open-Back Skirt', price: '$450.00', image: 'https://i.postimg.cc/dQGBb8Kc/cat-1.jpg' },
  { id: 7, title: 'Cotton Printed Skirt', price: '$370.00', image: 'https://i.postimg.cc/zvd3stzk/cat-2.jpg' },
  { id: 8, title: 'Saffire Toy Dolphin', price: '$900.00', image: 'https://i.postimg.cc/0QB6zXSH/cat-4.jpg' },
  { id: 9, title: 'Gloria Wardrobe ', price: '$900.00', image: 'https://i.postimg.cc/Yq9Hn2Jg/cat-5.jpg' },
  { id: 10, title: 'Hot Wheels 3 Car Pack', price: '$780.00', image: 'https://i.postimg.cc/dQGBb8Kc/cat-1.jpg' },
  { id: 11, title: 'Maclaren Toy Buggy ', price: '$760.00', image: 'https://i.postimg.cc/zvd3stzk/cat-2.jpg' },
  { id: 12, title: 'Funworld Canvas Shoes', price: '$900.00', image: 'https://i.postimg.cc/0QB6zXSH/cat-4.jpg' },
];

const ProductCard = ({ product }) => (
  <Card
    sx={{
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f0f0f0',
      textAlign: 'center',
      transition: 'all 0.3s ease-in-out',
      overflow: 'hidden',
      '&:hover': {
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
        transform: 'scale(1.02)',
        borderColor: '#e0e0e0',
      },
    }}
  >
    <CardMedia component="img" image={product.image} alt={product.title} sx={{ height: '140px', objectFit: 'contain' }} />
    <Box sx={{  padding: '16px', textAlign: 'center' }}>
      <CardContent sx={{ padding: '0' }}>
        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: '600' }}>
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ color: '#fa723c', fontWeight: '600', marginTop: '8px' }}>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', padding: '0',backgroundColor: '#FCE4EC', }}>
        <IconButton aria-label="add to shopping cart" sx={{ marginRight: '8px', border: '1px solid #f0f0f0' }}>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="add to favorites" sx={{ border: '1px solid #f0f0f0' }}>
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Box>
  </Card>
);

const ProductsPage = () => {
  return (
    <div>
      <Header></Header>
      <Box
        sx={{
          padding: '16px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'auto',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '24px' }}>
          Main Products
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsPage;
