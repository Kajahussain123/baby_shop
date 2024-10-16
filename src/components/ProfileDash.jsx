import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const ProfileDash = () => {
    return (
        <Box sx={{ padding: '20px', marginTop: '10px' }}>
            <Typography variant="h6" gutterBottom>
                Hello <strong>aaa</strong> (not aaa? <Link href="#">Log out</Link>)
            </Typography>
            <Typography variant="body1">
                From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
            </Typography>
        </Box>
    );
};

export default ProfileDash;
