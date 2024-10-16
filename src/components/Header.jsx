import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Favorites</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  const renderDrawer = (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {['Home', 'Catalog', 'Sale', 'Pages', 'Blog', 'About Us'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#FFD700', fontWeight: 'bold' }}
          >
            BABY
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: 'black', fontWeight: 'bold' }}
          >
            STORE
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/profile'} style={{ textDecoration: "none", color: "inherit" }}>
              <IconButton size="large" color="inherit">
                <AccountCircle />
              </IconButton>
            </Link>
            <Link to={'/wishlist'} style={{ textDecoration: "none", color: "inherit" }} >
              <IconButton size="large" color="inherit">
                <Badge badgeContent={0} color="error">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to={'/cart'} style={{ textDecoration: "none", color: "inherit" }} >
              <IconButton size="large" color="inherit">
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Box sx={{ backgroundColor: '#FFD700', width: '100%' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">Home</Button>
        </Link>
            <Button color="inherit">Catalog</Button>
            <Button color="inherit">Sale</Button>
            <Button color="inherit">Pages</Button>
            <Button color="inherit">Blog</Button>
            <Link to="/aboutus" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">About us</Button>
        </Link>            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit">USD $</Button>
          </Toolbar>
        </Container>
      </Box>
      {renderDrawer}
      {renderMobileMenu}
    </AppBar>
  );
};

export default Header;
