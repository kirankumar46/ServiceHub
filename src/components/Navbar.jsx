import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon, Home, Info, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: 'Home', icon: <Home size={18} />, path: '#home' },
    { text: 'Services', icon: <Info size={18} />, path: '#services' },
    { text: 'About', icon: <Phone size={18} />, path: '#about' },
    { text: 'Contact', icon: <Mail size={18} />, path: '#contact' }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link, index) => (
          <ListItem button key={index} component={Link} to={link.path}>
            <Box sx={{ mr: 2 }}>{link.icon}</Box>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={1} sx={{ bgcolor: 'white' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'primary.main',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          ServiceHub
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navVariants}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {navLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Button 
                  component={Link} 
                  to={link.path}
                  color="inherit"
                  sx={{ 
                    mx: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  {link.icon}
                  {link.text}
                </Button>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Button 
                component={Link} 
                to="/user-type" 
                variant="contained" 
                color="primary"
                sx={{ ml: 2 }}
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;