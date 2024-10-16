import React from 'react';
import { Button, Paper, Typography } from '@mui/material';

const Orders = () => {
    return (
        <Paper elevation={2} style={{ padding: '20px', marginTop: '10px' }}>
            <Typography variant="h6" gutterBottom>
                No order has been made yet.
            </Typography>
            <Button variant="contained" color="primary">
                Browse products
            </Button>
        </Paper>
    );
};

export default Orders;
