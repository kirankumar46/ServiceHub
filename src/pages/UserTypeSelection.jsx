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
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserTypeSelection = () => {
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
        <Container maxWidth="md">
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
              How would you like to use ServiceHub?
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Paper
                    component={Link}
                    to="/signup?type=client"
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        bgcolor: '#f5f5f5'
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        bgcolor: '#e3f2fd', 
                        p: 2, 
                        borderRadius: '50%',
                        mb: 2
                      }}
                    >
                      <User size={60} color="#1976d2" />
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                      I'm a Client
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      I'm looking for services and want to hire professionals
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Continue as Client
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Paper
                    component={Link}
                    to="/provider-type"
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        bgcolor: '#f5f5f5'
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        bgcolor: '#e8f5e9', 
                        p: 2, 
                        borderRadius: '50%',
                        mb: 2
                      }}
                    >
                      <Briefcase size={60} color="#388e3c" />
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                      I'm a Service Provider
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      I would like to offer my professional services to clients
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Continue as Provider
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

export default UserTypeSelection;