import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../components/Header';
const wishlistItems = [
  {
    image: 'https://via.placeholder.com/50', // Replace with actual image URL
    name: 'Sit aspernatur aut odit aut fugit omnis',
    price: '$225.00',
    originalPrice: null,
    stockStatus: 'In Stock',
  },
  {
    image: 'https://via.placeholder.com/50', // Replace with actual image URL
    name: 'Magni dolores eos qui ratione volup',
    price: '$185.00',
    originalPrice: '$215.00',
    stockStatus: 'In Stock',
  },
  {
    image: 'https://via.placeholder.com/50', // Replace with actual image URL
    name: 'Nisi ut aliquid ex ea commodi conseq',
    price: '$120.00',
    originalPrice: '$158.00',
    stockStatus: 'In Stock',
  },
];
const WishlistTable = () => {
  return (
    <div>
        <Header></Header>
        <TableContainer component={Paper} sx={{ maxWidth: '90%', margin: 'auto', mt: 4 }}>
          <Typography variant="h5" component="div" sx={{ padding: '16px' }}>
            My Wishlist
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Product name</TableCell>
                <TableCell align="right">Unit price</TableCell>
                <TableCell align="center">Stock status</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wishlistItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <img src={item.image} alt={item.name} style={{ width: 50, marginRight: 10 }} />
                    {item.name}
                  </TableCell>
                  <TableCell align="right">
                    {item.originalPrice ? (
                      <>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ textDecoration: 'line-through', marginRight: '8px' }}
                        >
                          {item.originalPrice}
                        </Typography>
                        <Typography variant="body1" color="error" component="span">
                          {item.price}
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="body1" component="span">
                        {item.price}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1" color="success">
                      {item.stockStatus}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="secondary">
                      Add to Cart
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  );
};
export default WishlistTable;