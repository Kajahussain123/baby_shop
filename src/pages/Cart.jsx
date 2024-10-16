import React from 'react';
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
  Divider,
  TextField,
  List,
  ListItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Header from '../components/Header';

const cartItems = [
  {
    id: 1,
    name: 'sed quia consequuntur magni dolores eos',
    price: 115.00,
    originalPrice: 135.00,
    image: 'https://i.postimg.cc/Yq9Hn2Jg/cat-5.jpg',
    description: 'Style Code Live is a daily, live show where style enthusiasts can connect, chat, shop...',
    discount: 20.00,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Nisi ut aliquid ex ea commodi conse qua',
    price: 70.00,
    originalPrice: 99.00,
    image: 'https://i.postimg.cc/zvd3stzk/cat-2.jpg',
    description: 'Style Code Live is a daily, live show where style enthusiasts can connect, chat, shop...',
    discount: 29.00,
    quantity: 1,
  },
];

const CartPage = () => {
  const handleIncreaseQuantity = (id) => {
    // Handle logic to increase quantity
  };

  const handleDecreaseQuantity = (id) => {
    // Handle logic to decrease quantity
  };

  const handleRemoveItem = (id) => {
    // Handle logic to remove item from cart
  };

  return (
    <div>
        <Header></Header>
        <Box sx={{ padding: '24px' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Cart
              </Typography>
              {cartItems.map((item) => (
                <Box key={item.id} sx={{ marginBottom: '24px' }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        <del>${item.originalPrice.toFixed(2)}</del>{' '}
                        <Typography variant="body1" component="span" color="primary" sx={{ fontWeight: 'bold' }}>
                          ${item.price.toFixed(2)}
                        </Typography>
                      </Typography>
                      {item.discount && (
                        <Typography variant="caption" sx={{ color: '#f50057', display: 'block', marginTop: '4px' }}>
                          SAVE ${item.discount.toFixed(2)}
                        </Typography>
                      )}
                      <Typography variant="body2" sx={{ marginTop: '8px' }}>
                        {item.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
                        <IconButton
                          aria-label="decrease quantity"
                          onClick={() => handleDecreaseQuantity(item.id)}
                          size="small"
                          sx={{ border: '1px solid #f0f0f0', marginRight: '8px' }}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography variant="body1">{item.quantity}</Typography>
                        <IconButton
                          aria-label="increase quantity"
                          onClick={() => handleIncreaseQuantity(item.id)}
                          size="small"
                          sx={{ border: '1px solid #f0f0f0', marginLeft: '8px' }}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Button
                        variant="text"
                        color="error"
                        sx={{ marginTop: '16px' }}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove item
                      </Button>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'right' }}>
                      <Typography variant="h6">${(item.price * item.quantity).toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ marginTop: '24px' }} />
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ backgroundColor: '#f7f7f7', padding: '16px', borderRadius: '8px' }}>
                <Typography variant="h6" gutterBottom>
                  Cart Totals
                </Typography>
                <List>
                  <ListItem>
                    <TextField label="Add a coupon" fullWidth variant="outlined" size="small" />
                  </ListItem>
                  <Divider sx={{ marginY: '16px' }} />
                  <ListItem sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="body1">Subtotal</Typography>
                    <Typography variant="body1">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</Typography>
                  </ListItem>
                  <Divider sx={{ marginY: '16px' }} />
                  <ListItem sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h6">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</Typography>
                  </ListItem>
                </List>
                <Button variant="contained" color="secondary" fullWidth sx={{ marginTop: '24px' }}>
                  Proceed to Checkout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </div>
  );
};

export default CartPage;
