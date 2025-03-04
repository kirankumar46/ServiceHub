import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import { User, Briefcase, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProviderTypeSelection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const genericFeatures = [
    'Basic Profile (Name, Contact, Service Type)',
    'Limited Service Listings',
    'Manual Booking Management',
    'Basic User Reviews & Ratings',
    'No Subscription Fees'
  ];

  const professionalFeatures = [
    'Verified Profile (ID verification, business certification)',
    'Unlimited Service Listings',
    'Automated Booking & Scheduling System',
    'Priority Listings & Promotions',
    'Customer Support & Dispute Resolution'
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <Box 
        sx={{ 
          py: 8,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography 
              variant="h3" 
              component="h1" 
              align="center" 
              gutterBottom
              sx={{ mb: 6 }}
            >
              Choose Your Provider Account Type
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Box 
                        sx={{ 
                          bgcolor: '#e3f2fd', 
                          p: 2, 
                          borderRadius: '50%',
                          display: 'inline-flex',
                          mb: 2
                        }}
                      >
                        <User size={50} color="#1976d2" />
                      </Box>
                      <Typography variant="h5" component="h2" gutterBottom>
                        Generic Provider
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        Basic account for casual or independent service providers
                      </Typography>
                    </Box>
                    
                    <List sx={{ mb: 3, flexGrow: 1 }}>
                      {genericFeatures.map((feature, index) => (
                        <ListItem key={index} disableGutters>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircle size={20} color="#4caf50" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                    
                    <Button 
                      component={Link}
                      to="/signup?type=provider-generic"
                      variant="contained" 
                      color="primary" 
                      fullWidth
                    >
                      Sign Up as Generic Provider
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Box 
                        sx={{ 
                          bgcolor: '#e8f5e9', 
                          p: 2, 
                          borderRadius: '50%',
                          display: 'inline-flex',
                          mb: 2
                        }}
                      >
                        <Briefcase size={50} color="#388e3c" />
                      </Box>
                      <Typography variant="h5" component="h2" gutterBottom>
                        Professional Provider
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        Advanced account for businesses and certified professionals
                      </Typography>
                    </Box>
                    
                    <List sx={{ mb: 3, flexGrow: 1 }}>
                      {professionalFeatures.map((feature, index) => (
                        <ListItem key={index} disableGutters>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircle size={20} color="#4caf50" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                    
                    <Button 
                      component={Link}
                      to="/signup?type=provider-professional"
                      variant="contained" 
                      color="secondary" 
                      fullWidth
                    >
                      Sign Up as Professional Provider
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
            
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Typography variant="body1" color="text.secondary">
                Already have an account? <Link to="/signin" style={{ color: '#3f51b5' }}>Sign In</Link>
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default ProviderTypeSelection;