import React from 'react';
import { Box, Card, CardContent, CardMedia, CardActions, Typography, IconButton, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const products = [
    {
      id: 1,
      title: 'Feeding Bottles',
      price: '$320.00',
      image: 'https://i.postimg.cc/Yq9Hn2Jg/cat-5.jpg',
    },
    {
      id: 2,
      title: 'Critter Clinic Shoes',
      price: '$240.00',
      image: 'https://i.postimg.cc/dQGBb8Kc/cat-1.jpg',
    },
    {
      id: 3,
      title: 'Deuter Black Tour Bag',
      price: '$300.00',
      image: 'https://i.postimg.cc/zvd3stzk/cat-2.jpg',
    },
    {
      id: 4,
      title: 'Flip & Surprise Caterpillar',
      price: '$100.00',
      image: 'https://i.postimg.cc/0QB6zXSH/cat-4.jpg',
    },
    {
      id: 5,
      title: 'Front Tie Raised',
      price: '$765.00',
      image: 'https://i.postimg.cc/Yq9Hn2Jg/cat-5.jpg',
    },
    {
      id: 6,
      title: 'Flowy Open-Back Skirt',
      price: '$450.00',
      image: 'https://i.postimg.cc/dQGBb8Kc/cat-1.jpg',
    },
    {
      id: 7,
      title: 'Cotton Printed Skirt',
      price: '$370.00',
      image: 'https://i.postimg.cc/zvd3stzk/cat-2.jpg',
    },
    {
      id: 8,
      title: 'Saffire Toy Dolphin',
      price: '$900.00',
      image: 'https://i.postimg.cc/0QB6zXSH/cat-4.jpg',
    },
    
  ];
const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        borderRadius: '10px',
        padding: '16px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #f0f0f0',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
          transform: 'scale(1.02)',
          borderColor: '#e0e0e0',
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ height: '140px', objectFit: 'contain' }}
      />
      <CardContent sx={{ paddingBottom: '8px' }}>
        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: '600' }}>
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ color: '#fa723c', fontWeight: '600', marginTop: '8px' }}>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', padding: '0', backgroundColor:"#ffe3ec" }}>
        <IconButton aria-label="add to shopping cart" sx={{ marginRight: '8px', border: '1px solid #f0f0f0' }}>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="add to favorites" sx={{ border: '1px solid #f0f0f0' }}>
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const MainProducts = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px' ,mt:7}}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '24px' }}>
        Main Products
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainProducts;
