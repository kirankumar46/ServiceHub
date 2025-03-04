import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Avatar,
  Rating,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Home as HomeIcon, 
  Briefcase, 
  Car, 
  User, 
  CheckCircle, 
  Shield, 
  Calendar, 
  CreditCard 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  // Animation variants
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

  // Service categories
  const categories = [
    { 
      title: 'Home Services', 
      icon: <HomeIcon size={40} />, 
      description: 'Cleaning, Plumbing, Electrical',
      color: '#e3f2fd'
    },
    { 
      title: 'Business Help', 
      icon: <Briefcase size={40} />, 
      description: 'IT Support, Accounting, Legal',
      color: '#e8f5e9'
    },
    { 
      title: 'Vehicle Care', 
      icon: <Car size={40} />, 
      description: 'Car Wash, Repairs, Maintenance',
      color: '#fff3e0'
    },
    { 
      title: 'Personal Services', 
      icon: <User size={40} />, 
      description: 'Fitness, Tutoring, Beauty',
      color: '#f3e5f5'
    }
  ];

  // Features
  const features = [
    {
      title: 'Diverse Services',
      description: 'From home cleaning to business support, find everything you need',
      icon: <CheckCircle size={40} color="#3f51b5" />
    },
    {
      title: 'Trusted Professionals',
      description: 'All service providers are verified and rated by customers',
      icon: <Shield size={40} color="#3f51b5" />
    },
    {
      title: 'Easy Booking',
      description: 'Simple scheduling system with fast response times',
      icon: <Calendar size={40} color="#3f51b5" />
    },
    {
      title: 'Secure Payments',
      description: 'Safe and transparent payment processing',
      icon: <CreditCard size={40} color="#3f51b5" />
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'John D.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      text: 'This platform helped me find a reliable plumber in minutes! The service was excellent and pricing transparent.',
      rating: 5
    },
    {
      name: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      text: 'I\'ve been using ServiceHub for all my home maintenance needs. The quality of professionals is consistently high.',
      rating: 4.5
    },
    {
      name: 'Michael T.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      text: 'As a business owner, finding reliable IT support was always a challenge until I discovered ServiceHub.',
      rating: 5
    }
  ];

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box 
        id="home"
        sx={{ 
          background: 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h2" 
                  component="h1" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                  }}
                >
                  Find the Right Service, Anytime, Anywhere!
                </Typography>
                <Typography 
                  variant="h6" 
                  paragraph
                  sx={{ mb: 4, opacity: 0.9 }}
                >
                  Connect with trusted professionals for all your service needs in just a few clicks.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    component={Link}
                    to="/user-type"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      fontSize: '1rem'
                    }}
                  >
                    Explore Services
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="inherit" 
                    size="large"
                    component={Link}
                    to="/provider-type"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      fontSize: '1rem',
                      borderColor: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Join as a Provider
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box 
                  component="img"
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  alt="Service professionals"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Features Section */}
      <Box id="features" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              align="center" 
              gutterBottom
              sx={{ mb: 6 }}
            >
              Why Choose ServiceHub
            </Typography>
            
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card 
                      elevation={0}
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        p: 3,
                        transition: '0.3s',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
      
      {/* Service Categories */}
      <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              align="center" 
              gutterBottom
              sx={{ mb: 6 }}
            >
              Service Categories
            </Typography>
            
            <Grid container spacing={3}>
              {categories.map((category, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card 
                      sx={{ 
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
                      <Box 
                        sx={{ 
                          p: 3, 
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          bgcolor: category.color
                        }}
                      >
                        {category.icon}
                      </Box>
                      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {category.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {category.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
      
      {/* Testimonials */}
      <Box id="about" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              align="center" 
              gutterBottom
              sx={{ mb: 6 }}
            >
              What Our Users Say
            </Typography>
            
            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        p: 3,
                        transition: '0.3s',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          sx={{ width: 56, height: 56, mr: 2 }}
                        />
                        <Box>
                          <Typography variant="h6" component="h3">
                            {testimonial.name}
                          </Typography>
                          <Rating 
                            value={testimonial.rating} 
                            precision={0.5} 
                            readOnly 
                            size="small"
                          />
                        </Box>
                      </Box>
                      <Typography variant="body1" paragraph sx={{ flexGrow: 1 }}>
                        "{testimonial.text}"
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
      
      {/* CTA Section */}
      <Box 
        id="contact"
        sx={{ 
          py: 8, 
          bgcolor: '#3f51b5',
          color: 'white'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box 
              sx={{ 
                textAlign: 'center',
                py: 4
              }}
            >
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Ready to Get Started?
              </Typography>
              <Typography 
                variant="h6" 
                paragraph
                sx={{ mb: 4, opacity: 0.9, maxWidth: '700px', mx: 'auto' }}
              >
                Join thousands of satisfied customers who have found the perfect service provider for their needs.
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                component={Link}
                to="/user-type"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1rem'
                }}
              >
                Get Started Now
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default LandingPage;