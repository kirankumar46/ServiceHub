import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Chip,
  TextField,
  InputAdornment,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tab,
  Tabs
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Search, 
  Bell, 
  User, 
  Menu as MenuIcon, 
  Home as HomeIcon,
  Grid as GridIcon,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  Star,
  Clock,
  CheckCircle,
  Briefcase,
  
  Car,
  Heart,
  Scissors,
  Wrench
} from 'lucide-react';
import Footer from '../components/Footer';

const ClientHome = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationsAnchor, setNotificationsAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  
  useEffect(() => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      navigate('/signin');
      return;
    }
    
    setCurrentUser(user);
  }, [navigate]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
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
  
  // Sample data
  const categories = [
    { 
      title: 'Home Services', 
      icon: <HomeIcon size={30} />, 
      color: '#e3f2fd',
      services: ['Cleaning', 'Plumbing', 'Electrical']
    },
    { 
      title: 'Business Help', 
      icon: <Briefcase size={30} />, 
      color: '#e8f5e9',
      services: ['IT Support', 'Accounting', 'Legal']
    },
    { 
      title: 'Vehicle Care', 
      icon: <Car size={30} />, 
      color: '#fff3e0',
      services: ['Car Wash', 'Repairs', 'Maintenance']
    },
    { 
      title: 'Personal Services', 
      icon: <Scissors size={30} />, 
      color: '#f3e5f5',
      services: ['Fitness', 'Tutoring', 'Beauty']
    },
    { 
      title: 'Home Improvement', 
      color: '#ffebee', 
      icon: <Wrench size={30} />, 
      services: ['Renovation', 'Carpentry', 'Painting'] 
    },
    { 
      title: 'Health & Wellness', 
      icon: <Heart size={30} />, 
      color: '#e0f7fa',
      services: ['Yoga', 'Massage', 'Therapy']
    }
  ];
  
  const recommendedServices = [
    {
      id: 1,
      title: 'Professional Home Cleaning',
      provider: 'CleanPro Services',
      rating: 4.8,
      reviews: 124,
      price: '$80-120',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      title: 'Plumbing Repair & Installation',
      provider: 'Quick Fix Plumbers',
      rating: 4.6,
      reviews: 89,
      price: '$60-150',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      title: 'Electrical Maintenance',
      provider: 'PowerSafe Electricians',
      rating: 4.9,
      reviews: 56,
      price: '$70-200',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      title: 'Interior Painting',
      provider: 'ColorMaster Painters',
      rating: 4.7,
      reviews: 42,
      price: '$200-500',
      image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    }
  ];
  
  const upcomingBookings = [
    {
      id: 1,
      service: 'Home Cleaning',
      provider: 'CleanPro Services',
      date: 'Tomorrow, 10:00 AM',
      status: 'Confirmed',
      providerImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      service: 'Plumbing Repair',
      provider: 'Quick Fix Plumbers',
      date: 'May 25, 2:30 PM',
      status: 'Pending',
      providerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    }
  ];
  
  const promotions = [
    {
      id: 1,
      title: '20% OFF First Booking',
      code: 'FIRST20',
      expiry: 'Valid until June 30',
      color: '#f44336'
    },
    {
      id: 2,
      title: 'Free Consultation',
      code: 'CONSULT',
      expiry: 'Valid for new users',
      color: '#4caf50'
    }
  ];
  
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };
  
  // Toggle drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  // Drawer content
  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar 
          sx={{ width: 80, height: 80, mb: 2, bgcolor: 'primary.main' }}
        >
          {currentUser?.fullName?.charAt(0) || 'U'}
        </Avatar>
        <Typography variant="h6" noWrap component="div">
          {currentUser?.fullName || 'User'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {currentUser?.email || 'user@example.com'}
        </Typography>
      </Box>
      
      <Divider />
      
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon size={20} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GridIcon size={20} />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Calendar size={20} />
          </ListItemIcon>
          <ListItemText primary="Bookings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MessageSquare size={20} />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
      </List>
      
      <Divider />
      
      <List>
        <ListItem button>
          <ListItemIcon>
            <Settings size={20} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogOut size={20} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  if (!currentUser) {
    return null; // Or a loading spinner
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: 'primary.main', fontWeight: 'bold' }}
          >
            ServiceHub
          </Typography>
          
          <Box sx={{ flexGrow: 1, mx: 2 }}>
            <TextField
              fullWidth
              placeholder="Search for services..."
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={20} />
                  </InputAdornment>
                ),
              }}
              sx={{ maxWidth: 500 }}
            />
          </Box>
          
          <Box sx={{ display: 'flex' }}>
            <IconButton
              color="inherit"
              onClick={(e) => setNotificationsAnchor(e.currentTarget)}
            >
              <Badge badgeContent={3} color="error">
                <Bell size={20} />
              </Badge>
            </IconButton>
            
            <IconButton
              color="inherit"
              onClick={(e) => setProfileAnchor(e.currentTarget)}
              sx={{ ml: 1 }}
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                {currentUser.fullName.charAt(0)}
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationsAnchor}
        open={Boolean(notificationsAnchor)}
        onClose={() => setNotificationsAnchor(null)}
        PaperProps={{
          sx: { width: 320, maxHeight: 500 }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Notifications</Typography>
        </Box>
        <Divider />
        <MenuItem>
          <Box sx={{ display: 'flex', py: 1 }}>
            <Box sx={{ mr: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.light' }}>
                <CheckCircle size={20} />
              </Avatar>
            </Box>
            <Box>
              <Typography variant="body1">Booking Confirmed</Typography>
              <Typography variant="body2" color="text.secondary">
                Your home cleaning service has been confirmed for tomorrow.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                10 minutes ago
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box sx={{ display: 'flex', py: 1 }}>
            <Box sx={{ mr: 2 }}>
              <Avatar sx={{ bgcolor: 'secondary.light' }}>
                <Star size={20} />
              </Avatar>
            </Box>
            <Box>
              <Typography variant="body1">New Service Available</Typography>
              <Typography variant="body2" color="text.secondary">
                Check out our new home organization services!
              </Typography>
              <Typography variant="caption" color="text.secondary">
                2 hours ago
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box sx={{ display: 'flex', py: 1 }}>
            <Box sx={{ mr: 2 }}>
              <Avatar sx={{ bgcolor: 'warning.light' }}>
                <Clock size={20} />
              </Avatar>
            </Box>
            <Box>
              <Typography variant="body1">Booking Reminder</Typography>
              <Typography variant="body2" color="text.secondary">
                Your plumbing service is scheduled for tomorrow at 2:30 PM.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                1 day ago
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
      
      {/* Profile Menu */}
      <Menu
        anchorEl={profileAnchor}
        open={Boolean(profileAnchor)}
        onClose={() => setProfileAnchor(null)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      
      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
      
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', py: 4 }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Welcome Section */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome back, {currentUser.fullName.split(' ')[0]}!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Find and book the services you need, all in one place.
                </Typography>
              </Box>
            </motion.div>
            
            {/* Tabs */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <Tabs 
                  value={activeTab} 
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Home" />
                  <Tab label="Services" />
                  <Tab label="Bookings" />
                  
                </Tabs>
              </Box>
            </motion.div>
            
            {/* Hero Banner */}
            {activeTab === 0 && ( 
            <motion.div variants={itemVariants}>
              <motion.div variants={itemVariants}>
              <Card 
                sx={{ 
                  mb: 4, 
                  background: 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%)',
                  color: 'white',
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box 
                    sx={{ 
                      p: { xs: 3, md: 5 },
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      component="h2" 
                      gutterBottom
                      sx={{ fontWeight: 700 }}
                    >
                      Find Trusted Services Near You!
                    </Typography>
                    <Typography 
                      variant="body1" 
                      paragraph
                      sx={{ mb: 3, maxWidth: '600px' }}
                    >
                      Book home cleaning, repairs, and other services in just a few clicks!
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        size="large"
                      >
                        Explore Services
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="inherit" 
                        size="large"
                        sx={{ 
                          borderColor: 'white',
                          '&:hover': {
                            borderColor: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)'
                          }
                        }}
                      >
                        Book a Service
                      </Button>
                    </Box>
                  </Box>
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '40%',
                      height: '100%',
                      display: { xs: 'none', md: 'block' }
                    }}
                  >
                    <Box 
                      component="img"
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                      alt="Service professionals"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                </Box>
              </Card>
            </motion.div>
            
            {/* Service Categories */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
                  Service Categories
                </Typography>
                <Grid container spacing={2}>
                  {categories.map((category, index) => (
                    <Grid item xs={6} sm={4} md={2} key={index}>
                      <Card 
                        sx={{ 
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: '0.3s',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                          }
                        }}
                      >
                        <Box 
                          sx={{ 
                            p: 2, 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            bgcolor: category.color
                          }}
                        >
                          {category.icon}
                        </Box>
                        <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 2 }}>
                          <Typography variant="subtitle1" component="h3" gutterBottom noWrap>
                            {category.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                            {category.services.join(', ')}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
            
            {/* Recommended Services */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
                  Recommended for You
                </Typography>
                <Grid container spacing={3}>
                  {recommendedServices.map((service) => (
                    <Grid item xs={12} sm={6} md={3} key={service.id}>
                      <Card 
                        sx={{ 
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: '0.3s',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                          }
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={service.image}
                          alt={service.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" component="h3" gutterBottom>
                            {service.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {service.provider}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Rating value={service.rating} precision={0.1} readOnly size="small" />
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                              ({service.reviews})
                            </Typography>
                          </Box>
                          <Typography variant="body2">
                            Price: {service.price}
                          </Typography>
                        </CardContent>
                        <Box sx={{ p: 2, pt: 0 }}>
                          <Button variant="contained" color="primary" fullWidth>
                            Book Now
                          </Button>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
            
            {/* Upcoming Bookings */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
                  Your Upcoming Bookings
                </Typography>
                <Grid container spacing={3}>
                  {upcomingBookings.length > 0 ? (
                    upcomingBookings.map((booking) => (
                      <Grid item xs={12} sm={6} key={booking.id}>
                        <Card>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Avatar 
                                src={booking.providerImage} 
                                sx={{ width: 50, height: 50, mr: 2 }}
                              />
                              <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="h3">
                                  {booking.service}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {booking.provider}
                                </Typography>
                              </Box>
                              <Chip 
                                label={booking.status} 
                                color={booking.status === 'Confirmed' ? 'success' : 'warning'}
                                size="small"
                              />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                              <Clock size={16} />
                              <Typography variant="body2" sx={{ ml: 1 }}>
                                {booking.date}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                              <Button variant="outlined" size="small" fullWidth>
                                Reschedule
                              </Button>
                              <Button variant="outlined" size="small" color="error" fullWidth>
                                Cancel
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  ) : (
                    <Grid item xs={12}>
                      <Card sx={{ p: 4, textAlign: 'center' }}>
                        <Typography variant="body1" color="text.secondary">
                          You don't have any upcoming bookings.
                        </Typography>
                        <Button 
                          variant="contained" 
                          color="primary"
                          sx={{ mt: 2 }}
                        >
                          Book a Service
                        </Button>
                      </Card>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </motion.div>
            
            {/* Promotions */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
                  Special Offers
                </Typography>
                <Grid container spacing={3}>
                  {promotions.map((promo) => (
                    <Grid item xs={12} sm={6} key={promo.id}>
                      <Card 
                        sx={{ 
                          background: `linear-gradient(135deg, ${promo.color}20 0%, ${promo.color}40 100%)`,
                          border: `1px solid ${promo.color}60`,
                          transition: '0.3s',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                          }
                        }}
                      >
                        <CardContent>
                          <Typography variant="h5" component="h3" gutterBottom>
                            {promo.title}
                          </Typography>
                          <Box 
                            sx={{ 
                              display: 'inline-block',
                              bgcolor: 'background.paper',
                              px: 2,
                              py: 1,
                              borderRadius: 1,
                              mb: 2,
                              border: '1px dashed grey.400'
                            }}
                          >
                            <Typography variant="h6" component="p">
                              {promo.code}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {promo.expiry}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
            
            {/* Testimonials */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
                  What Others Are Saying
                </Typography>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center', p: 2 }}>
                          <Avatar 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                            sx={{ width: 70, height: 70, mx: 'auto', mb: 2 }}
                          />
                          <Typography variant="h6" component="p">
                            Sarah M.
                          </Typography>
                          <Rating value={5} readOnly size="small" sx={{ mb: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            "The cleaning service I booked was exceptional. The cleaner was professional, thorough, and left my home spotless!"
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center', p: 2 }}>
                          <Avatar 
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                            sx={{ width: 70, height: 70, mx: 'auto', mb: 2 }}
                          />
                          <Typography variant="h6" component="p">
                            John D.
                          </Typography>
                          <Rating value={4.5} precision={0.5} readOnly size="small" sx={{ mb: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            "Found a great plumber through ServiceHub. Fixed my leaky faucet quickly and at a reasonable price. Will use again!"
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center', p: 2 }}>
                          <Avatar 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                            sx={{ width: 70, height: 70, mx: 'auto', mb: 2 }}
                          />
                          <Typography variant="h6" component="p">
                            Michael T.
                          </Typography>
                          <Rating value={5} readOnly size="small" sx={{ mb: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            "The electrician I hired through ServiceHub was knowledgeable and efficient. Fixed my wiring issues in no time!"
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
            </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
                  Service Categories
                </Typography>
                <Grid container spacing={2}>
                  {categories.map((category, index) => (
                    <Grid item xs={16} sm={8} md={4} key={index}>
                      <Card 
                        sx={{ 
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: '0.3s',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                          }
                        }}
                      >
                        <Box 
                          sx={{ 
                            p: 2, 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            bgcolor: category.color
                          }}
                        >
                          {category.icon}
                        </Box>
                        <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 2 }}>
                          <Typography variant="subtitle1" component="h3" gutterBottom noWrap>
                            {category.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                            {category.services.join(', ')}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
                  Your Upcoming Bookings
                </Typography>
                <Grid container spacing={3}>
                  {upcomingBookings.length > 0 ? (
                    upcomingBookings.map((booking) => (
                      <Grid item xs={12} sm={6} key={booking.id}>
                        <Card>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Avatar 
                                src={booking.providerImage} 
                                sx={{ width: 50, height: 50, mr: 2 }}
                              />
                              <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="h3">
                                  {booking.service}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {booking.provider}
                                </Typography>
                              </Box>
                              <Chip 
                                label={booking.status} 
                                color={booking.status === 'Confirmed' ? 'success' : 'warning'}
                                size="small"
                              />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                              <Clock size={16} />
                              <Typography variant="body2" sx={{ ml: 1 }}>
                                {booking.date}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                              <Button variant="outlined" size="small" fullWidth>
                                Reschedule
                              </Button>
                              <Button variant="outlined" size="small" color="error" fullWidth>
                                Cancel
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  ) : (
                    <Grid item xs={12}>
                      <Card sx={{ p: 4, textAlign: 'center' }}>
                        <Typography variant="body1" color="text.secondary">
                          You don't have any upcoming bookings.
                        </Typography>
                        <Button 
                          variant="contained" 
                          color="primary"
                          sx={{ mt: 2 }}
                        >
                          Book a Service
                        </Button>
                      </Card>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </motion.div>
            )}
          </motion.div>      
        </Container>
      </Box>

      
      
      <Footer />
    </Box>
  );
};

export default ClientHome;