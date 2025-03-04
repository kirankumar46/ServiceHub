import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom fontWeight="bold">
              ServiceHub
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Find the right service, anytime, anywhere. Connect with trusted professionals for all your needs.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" color="primary">
                <Facebook size={20} />
              </IconButton>
              <IconButton size="small" color="primary">
                <Twitter size={20} />
              </IconButton>
              <IconButton size="small" color="primary">
                <Instagram size={20} />
              </IconButton>
              <IconButton size="small" color="primary">
                <Linkedin size={20} />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>Home</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>Services</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>About Us</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>Contact</Link>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight="bold">
              Services
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>Home Cleaning</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>Plumbing</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>Electrical</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>Business Support</Link>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              123 Service Street, Service City
              <br />
              Email: info@servicehub.com
              <br />
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} ServiceHub. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;