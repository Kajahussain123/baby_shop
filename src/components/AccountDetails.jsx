import React from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material';

const AccountDetails = () => (
    <Paper elevation={3} style={{ padding: '16px' }}>
        <h2>Account Details</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Display Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Email Address" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Current Password" type="password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="New Password" type="password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Confirm New Password" type="password" variant="outlined" />
            </Grid>
        </Grid>
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Save changes
        </Button>
    </Paper>
);

export default AccountDetails;
