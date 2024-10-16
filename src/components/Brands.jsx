import React from 'react';
import { Grid, Card, CardMedia, Typography, Box } from '@mui/material';

const logos = [
  { src: 'https://i.postimg.cc/BvJ3KydQ/1035.png', alt: 'Brand 1' },
  { src: 'https://i.postimg.cc/FzwdFmCK/1438.png', alt: 'Brand 2' },
  { src: 'https://i.postimg.cc/9QnSWkCn/attachment-78736238.png', alt: 'Brand 3' },
  { src: 'https://i.postimg.cc/76VjyZ6g/Logo-Png-300-x-200-01.avif', alt: 'Brand 4' },
  { src: 'https://i.postimg.cc/BvJ3KydQ/1035.png', alt: 'Brand 5' },
  { src: 'https://i.postimg.cc/BvJ3KydQ/1035.png', alt: 'Brand 5' },
];

const BrandsSection = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#F9F9F9' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Our Brands
      </Typography>
      <Box sx={{ overflowX: 'auto', padding: '10px', display: 'flex' }}>
        {logos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '150px',
              marginRight: '16px',
            }}
          >
            <Card
              sx={{
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                height: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardMedia
                component="img"
                image={logo.src}
                alt={logo.alt}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BrandsSection;
