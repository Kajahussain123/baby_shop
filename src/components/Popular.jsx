import React from 'react';
import { Box, Card, CardContent, CardMedia, CardActions, Typography, IconButton, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const products = [
  {
    id: 1,
    title: 'Baby Shoes',
    category: 'Accessories',
    price: '$70.00',
    oldPrice: '$99.00',
    image: 'https://i.postimg.cc/0QB6zXSH/cat-4.jpg',
  },
  {
    id: 2,
    title: 'Plush Toy',
    category: 'Gift Baby',
    price: '$115.00',
    oldPrice: '$135.00',
    image: 'https://i.postimg.cc/Yq9Hn2Jg/cat-5.jpg',
  },
  {
    id: 3,
    title: 'Piggy Bank',
    category: 'Baby',
    price: '$125.00',
    oldPrice: '$185.00',
    image: 'https://i.postimg.cc/dQGBb8Kc/cat-1.jpg',
  },
  {
    id: 4,
    title: 'Elephant Plush',
    category: 'Accessories',
    price: '$185.00',
    oldPrice: '$215.00',
    image: 'https://i.postimg.cc/zvd3stzk/cat-2.jpg',
  },
];

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ width: "250px", position: 'relative', overflow: 'hidden' }}>
      <CardMedia
        component="img"
        height="250"
        image={product.image}
        alt={product.title}
        sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through', marginLeft: 1 }}>
            {product.oldPrice}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          opacity: 0,
          transition: 'opacity 0.3s',
          '&:hover': { opacity: 1 },
        }}
      >
        <IconButton aria-label="add to favorites" color="white">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" color="white">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="zoom" color="white">
          <ZoomInIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const ProductSection = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 ,textAlign:"center",mt:7 }}>
      <h1>Popular Items</h1>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
