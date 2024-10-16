import React from 'react';
import { Grid, Box, Typography, Card, CardContent, CardMedia, Avatar } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Aboutus = () => {
    return (
        <div>
            <Header />
            <Box sx={{ padding: '40px' }}>
                {/* Image Section */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.postimg.cc/W4SndSzB/slider-5-900x.webp" alt="Family Image" style={{ width: '100%', borderRadius: '20px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.postimg.cc/W4SndSzB/slider-5-900x.webp" alt="Baby Image" style={{ width: '100%', borderRadius: '20px' }} />
                    </Grid>
                </Grid>

                {/* Statistics Section */}
                <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '30px' }}>
                    <Grid item xs={6} md={3}>
                        <Box sx={statBoxStyle}>
                            <Typography variant="h4" sx={{ color: '#ff4081' }}>800+</Typography>
                            <Typography>Product Type</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box sx={statBoxStyle}>
                            <Typography variant="h4" sx={{ color: '#ff4081' }}>12+</Typography>
                            <Typography>Years of Experience</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box sx={statBoxStyle}>
                            <Typography variant="h4" sx={{ color: '#ff4081' }}>2,500+</Typography>
                            <Typography>Trust Customer</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box sx={statBoxStyle}>
                            <Typography variant="h4" sx={{ color: '#ff4081' }}>15+</Typography>
                            <Typography>Store Nationwide</Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Paragraph Section */}
                <Box sx={{ marginTop: '40px' }}>
                    <Typography variant="h5" sx={{ marginBottom: '20px', color: '#333' }}>
                        About Us
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
                        Our company has been dedicated to providing high-quality products and exceptional service for over 12 years. With a wide range of 800+ product types, we have built a strong reputation and earned the trust of over 2,500 customers nationwide. Our commitment to excellence is reflected in our numerous stores, where we ensure that our customers have access to the best products and support.
                        <br /><br />
                        We believe in creating lasting relationships with our customers and continuously strive to exceed their expectations. Whether you're shopping for yourself or your family, you can trust us to deliver products that meet the highest standards of quality and safety.
                    </Typography>
                </Box>

                {/* Our Team Section */}
                <Box sx={{ marginTop: '40px' }}>
                    <Typography variant="h5" sx={{ marginBottom: '20px', color: '#333' }}>
                        Our Team
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={cardStyle}>
                                <CardMedia>
                                    <Avatar
                                        alt="John Doe"
                                        src="https://i.postimg.cc/yYtyt3v3/member1.jpg"
                                        sx={avatarStyle}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#333' }}>
                                        John Doe
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#888' }}>
                                        CEO
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={cardStyle}>
                                <CardMedia>
                                    <Avatar
                                        alt="Jane Smith"
                                        src="https://i.postimg.cc/5NQpVYLy/member2.jpg"
                                        sx={avatarStyle}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#333' }}>
                                        Jane Smith
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#888' }}>
                                        Marketing Manager
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={cardStyle}>
                                <CardMedia>
                                    <Avatar
                                        alt="Alice Johnson"
                                        src="https://i.postimg.cc/jd4ThKdy/member3.jpg"
                                        sx={avatarStyle}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#333' }}>
                                        Alice Johnson
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#888' }}>
                                        Lead Designer
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={cardStyle}>
                                <CardMedia>
                                    <Avatar
                                        alt="Michael Brown"
                                        src="https://i.postimg.cc/GpXy2jv3/member4.jpg"
                                        sx={avatarStyle}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#333' }}>
                                        Michael Brown
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#888' }}>
                                        Chief Developer
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                
            </Box>
            <Footer></Footer>
        </div>
    );
};

const statBoxStyle = {
    padding: '20px',
    textAlign: 'center',
    border: '2px dashed #ff4081',
    borderRadius: '10px',
    backgroundColor: '#fff'
};

const avatarStyle = {
    width: '120px',
    height: '120px',
    margin: '0 auto',
    borderRadius: '50%'
};

const cardStyle = {
    maxWidth: 345,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'translateY(-10px)'
    }
};

export default Aboutus;
