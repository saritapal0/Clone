import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../../src/assets/Images/logo.svg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import navItems from '../../layouts/Arraydata/navItems';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMediaQuery } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
// import MainSlider from '../../components/MiddleContent/MainSlider'
// import Row2 from '../../components/MiddleContent/Row2';
// import Row3 from '../../components/MiddleContent/Row3';
// import Row4 from '../../components/MiddleContent/Row4';
// import Row5 from '../../components/MiddleContent/Row5';
// import Row6 from '../../components/MiddleContent/Row6';




const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box sx={{ width: drawerWidth }} onClick={handleDrawerToggle}>
      <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { sm: 'block' },
              position: 'fixed',
              mx: 3,
              mt: 2
            }}
          >
            <img src={Logo} alt="Logo" style={{ height: '25px', width: 'auto' }} />
            <IconButton aria-label="Close">
        <CloseIcon />
      </IconButton>
     </Typography>
     <Divider/>
      <Toolbar />
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding sx={{ py: 1 }}>
              <ListItemButton onClick={handleMenuClick}>
                <ListItemText primary={item.title} />
                {item.subItems && <ArrowDropDownIcon />}
              </ListItemButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {item.subItems && item.subItems.map((subItem) => (
                  <MenuItem key={subItem.id} component={Link} to={subItem.href} onClick={handleMenuClose}>
                    {subItem.title}
                  </MenuItem>
                ))}
              </Menu>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 1, display: { sm: 'none' }, position: 'fixed', zIndex: 1, mx: 0, mt: 4 }}
      >
        <MenuIcon />
      </IconButton>
      <AppBar  sx={{ bgcolor: 'white', height: '100px', zIndex: 0 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { sm: 'block' },
              position: 'fixed',
              mx: 3,
              mt: 5
            }}
          >
            <img src={Logo} alt="Logo" style={{ height: '25px', width: 'auto' }} />
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto', mx: 3, mt: 4, mr: 5 }}>
            {!isSmallScreen &&
              navItems.map((item) => (
                <Button
                  key={item.id}
                  sx={{ color: 'black', marginRight: 2 }}
                  onClick={handleMenuClick}
                >
                  {item.title}
                </Button>
              ))}
          </Box>

        
            {!isSmallScreen &&
             <Button
            
             onClick={handleMenuClick}
             sx={{
               backgroundColor: '#eeeeee', // Set the background color to your desired color
               borderRadius: 5,
               position: 'relative',
               mt: 4,
               mr: 4,
               color: 'black', // Set text color to black
               height: '50px', // Set the height of the button
               width: '120px', // Set the width of the button
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
             }}
           >
             Entrar
             <AccountCircleIcon sx={{ marginLeft: -8 }} />
           </Button>
           
              }
          
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', }}
      >
        <Toolbar />
        {/* <MainSlider />
        <Row2 />
        <Row3/>
        <Row4/>
        <Row5/>
        <Row6/> */}
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
