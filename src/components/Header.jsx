import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu, X, Home, Info, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { text: "Home", icon: <Home size={18} />, href: "#home" },
    { text: "Features", icon: <Info size={18} />, href: "#features" },
    { text: "About", icon: <Phone size={18} />, href: "#about" },
    { text: "Contact", icon: <Mail size={18} />, href: "#contact" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navItems.map((item) => (
              <Typography
                key={item.text}
                component="a"
                href={item.href}
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item.icon}
                {item.text}
              </Typography>
            ))}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton onClick={toggleMenu} sx={{ color: "gray" }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.text} href={item.href} onClick={toggleMenu}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
