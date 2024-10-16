import React from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material';

const AddressForm = () => (
    <Paper elevation={3} style={{ padding: '16px' }}>
        <h2>Shipping address</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Company Name (optional)" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Country/Region" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Street Address" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Town/City" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="State" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="PIN Code" variant="outlined" required />
            </Grid>
        </Grid>
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Save address
        </Button>
    </Paper>
);

export default AddressForm;
