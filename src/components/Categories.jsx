import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const categories = [
  { title: 'Baby', image: 'https://i.postimg.cc/0QB6zXSH/cat-4.jpg' },
  { title: 'Car Seat', image: 'https://i.postimg.cc/Yq9Hn2Jg/cat-5.jpg' },
  { title: 'Clothing', image: 'https://i.postimg.cc/dQGBb8Kc/cat-1.jpg' },
  { title: 'Footwear', image: 'https://i.postimg.cc/zvd3stzk/cat-2.jpg' },
  { title: 'Gift Baby', image: 'https://i.postimg.cc/fTGMVnr9/cat-7.jpg' },
  { title: 'Toys', image: 'https://i.postimg.cc/ht4RzD0h/img-9-250x.avif' },
];

const ImageContainer = styled(Box)(({ borderColor }) => ({
  width: '150px',
  height: '200px',
  borderRadius: '30%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '10px',
  border: `4px dashed ${borderColor || 'transparent'}`,
  transition: 'border-color 0.3s ease',
  '&:hover': {
    borderColor: borderColor || '#FF4081',
  },
}));

const CategoryImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '30%',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const CategoriesSection = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 7 }}>
      <h1>Categories</h1>
      <Grid container spacing={4} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index}>
            <StyledLink to="/products">
              <ImageContainer borderColor={category.borderColor}>
                <CategoryImage src={category.image} alt={category.title} />
              </ImageContainer>
              <Typography variant="h6" sx={{ fontWeight: 500, mt: 1 }}>
                {category.title}
              </Typography>
            </StyledLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesSection;
