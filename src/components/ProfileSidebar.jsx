import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const ProfileSidebar = ({ onSelect }) => {
    return (
        <Paper elevation={2}>
            <List component="nav">
                <ListItem button onClick={() => onSelect('dashboard')}>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={() => onSelect('orders')}>
                    <ListItemText primary="Orders" />
                </ListItem>
               
                <ListItem button onClick={() => onSelect('addresses')}>
                    <ListItemText primary="Addresses" />
                </ListItem>
                <ListItem button onClick={() => onSelect('accountDetails')}>
                    <ListItemText primary="Account details" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Log out" />
                </ListItem>
            </List>
        </Paper>
    );
};

export default ProfileSidebar;
