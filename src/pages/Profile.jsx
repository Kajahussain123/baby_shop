import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ProfileSidebar from '../components/ProfileSidebar';
import AddressForm from '../components/AddressForm';
import AccountDetails from '../components/AccountDetails';
import Orders from '../components/Orders';
import Header from '../components/Header';
import ProfileDash from '../components/ProfileDash';

const Profile = () => {
    const [selectedSection, setSelectedSection] = useState('dashboard');

    const renderSection = () => {
        switch (selectedSection) {
            case 'dashboard': // Add this case for dashboard
                return <ProfileDash />;
            case 'addresses':
                return <AddressForm />;
            case 'accountDetails':
                return <AccountDetails />;
            case 'orders':
                return <Orders />;
            default:
                return <ProfileDash />;
        }
    };

    return (
        <div>
            <Header></Header>
            <Grid container spacing={2} sx={{mt:1}}>
                
                <Grid item xs={12} sm={3}>
                    <ProfileSidebar onSelect={setSelectedSection} />
                </Grid>
                <Grid item xs={12} sm={9}>
                    {renderSection()}
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile;
