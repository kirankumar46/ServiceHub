import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia,
  Avatar, Rating, Chip, AppBar, Toolbar, IconButton, Badge, Menu, MenuItem,
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Tab, Tabs, Paper,
  Select, FormControl, InputLabel
} from '@mui/material';
import { motion } from 'framer-motion';
import {  Bell,   Menu as MenuIcon,  Home as HomeIcon, Grid as GridIcon,
  Calendar, MessageSquare, Settings, LogOut, Star, Clock, CheckCircle, XCircle,
  DollarSign, Edit, Plus, Trash2, Upload, MapPin, BarChart, FileText, Award,
  Users, Zap, Shield
} from 'lucide-react';
import Footer from '../components/Footer';

const ServiceProviderProfessional = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationsAnchor, setNotificationsAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [timeRange, setTimeRange] = useState('week');
  
  useEffect(() => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.userType !== 'provider-professional') {
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
  const serviceRequests = [
    {
      id: 1,
      service: 'Business Consulting',
      client: 'John Smith',
      date: 'Tomorrow, 10:00 AM',
      status: 'Pending',
      price: '$150',
      clientImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      address: '123 Main St, Anytown, USA',
      duration: '2 hours'
    },
    {
      id: 2,
      service: 'Legal Consultation',
      client: 'Sarah Johnson',
      date: 'May 25, 2:30 PM',
      status: 'Confirmed',
      price: '$200',
      clientImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      address: '456 Oak Ave, Somewhere, USA',
      duration: '1 hour'
    }
  ];
  
  const completedServices = [
    {
      id: 3,
      service: 'Legal Consultation',
      client: 'Emily Davis',
      date: 'May 10, 9:00 AM',
      status: 'Completed',
      price: '$200',
      rating: 4.5,
      clientImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      address: '321 Elm St, Nowhere, USA',
      duration: '1 hour'
    },
    {
      id: 4,
      service: 'Financial Planning',
      client: 'David Wilson',
      date: 'May 5, 3:00 PM',
      status: 'Completed',
      price: '$180',
      rating: 5,
      clientImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      address: '456 Oak St, Somewhere, USA',
      duration: '1.5 hours'
    }
  ];
  
  const myServices = [
    {
      id: 1,
      title: 'Business Consulting',
      description: 'Strategic business consulting for small to medium enterprises. Includes market analysis, growth strategies, and operational optimization.',
      price: '$150/hour',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      title: 'Legal Consultation',
      description: 'Professional legal advice for individuals and businesses. Specializing in contract law, intellectual property, and business formation.',
      price: '$200/hour',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      
    },
    {
      id: 3,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services including investment strategies, retirement planning, and tax optimization.',
      price: '$180/hour',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      
    }
  ];
  
  const earnings = {
    today: 0,
    thisWeek: 530,
    thisMonth: 2150,
    total: 8750
  };
  
  const analytics = {
    views: 245,
    inquiries: 32,
    bookingRate: 68,
    completionRate: 95,
    averageRating: 4.8,
    repeatClients: 12
  };
  
  const certifications = [
    {
      id: 1,
      title: 'Certified Business Consultant',
      issuer: 'International Business Consulting Association',
      date: 'January 2022',
      verified: true
    },
    {
      id: 2,
      title: 'Legal Practice Certificate',
      issuer: 'National Legal Board',
      date: 'March 2021',
      verified: true
    },
    {
      id: 3,
      title: 'Certified Financial Planner',
      issuer: 'Financial Planning Standards Board',
      date: 'June 2020',
      verified: true
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
    
  // Handle time range change
  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };
  
  // Accept service request
  const handleAcceptRequest = (id) => {
    // Update the status of the request
    const updatedRequests = serviceRequests.map(request => {
      if (request.id === id) {
        return { ...request, status: 'Confirmed' };
      }
      return request;
    });
    
    // In a real app, you would make an API call here
    console.log('Accepted request:', id);
  };
  
  // Decline service request
  const handleDeclineRequest = (id) => {
    // In a real app, you would make an API call here
    console.log('Declined request:', id);
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
          sx={{ width: 80, height: 80, mb: 2, bgcolor: 'secondary.main' }}
        >
          {currentUser?.fullName?.charAt(0) || 'P'}
        </Avatar>
        <Typography variant="h6" noWrap component="div">
          {currentUser?.fullName || 'Provider'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {currentUser?.email || 'provider@example.com'}
        </Typography>
        <Chip 
          label="Professional Provider" 
          color="secondary" 
          size="small" 
          sx={{ mt: 1 }}
        />
      </Box>
      
      <Divider />
      
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon size={20} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
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
        <ListItem button>
          <ListItemIcon>
            <BarChart size={20} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DollarSign size={20} />
          </ListItemIcon>
          <ListItemText primary="Earnings" />
        </ListItem>
      </List>
      
      <Divider />
      
      <List>
        <ListItem button>
          <ListItemIcon>
            <Award size={20} />
          </ListItemIcon>
          <ListItemText primary="Certifications" />
        </ListItem>
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
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
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
                <Calendar size={20} />
              </Avatar>
            </Box>
            <Box>
              <Typography variant="body1">New Booking Request</Typography>
              <Typography variant="body2" color="text.secondary">
                Robert Wilson has requested a financial planning consultation.
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
              <Avatar sx={{ bgcolor: 'success.light' }}>
                <Star size={20} />
              </Avatar>
            </Box>
            <Box>
              <Typography variant="body1">New Review</Typography>
              <Typography variant="body2" color="text.secondary">
                Michael Brown gave you a 5-star rating!
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
              <Avatar sx={{ bgcolor: 'info.light' }}>
                <MessageSquare size={20} />
              </Avatar>
            </Box>
            <Box>
              <Typography variant="body1">New Message</Typography>
              <Typography variant="body2" color="text.secondary">
                Sarah Johnson sent you a message about her upcoming appointment.
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
                  Manage your professional services and client bookings from your dashboard.
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
                  <Tab label="Dashboard" />
                  <Tab label="Service Requests" />
                  <Tab label="My Services" />
                  <Tab label="Earnings" />
                  <Tab label="Certifications" />
                </Tabs>
              </Box>
            </motion.div>
            
            {/* Dashboard Tab */}
            {activeTab === 0 && (
              <>
                {/* Stats Cards */}
                <motion.div variants={itemVariants}>
                  <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={6} md={3}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary" gutterBottom>
                            Pending Requests
                          </Typography>
                          <Typography variant="h3" component="div">
                            {serviceRequests.filter(req => req.status === 'Pending').length}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary" gutterBottom>
                            Confirmed Bookings
                          </Typography>
                          <Typography variant="h3" component="div">
                            {serviceRequests.filter(req => req.status === 'Confirmed').length}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary" gutterBottom>
                            Completed Jobs
                          </Typography>
                          <Typography variant="h3" component="div">
                            {completedServices.length}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary" gutterBottom>
                            Earnings This Month
                          </Typography>
                          <Typography variant="h3" component="div">
                            ${earnings.thisMonth}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </motion.div>
                
                {/* Recent Requests */}
                <motion.div variants={itemVariants}>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Recent Service Requests
                    </Typography>
                    <Grid container spacing={3}>
                      {serviceRequests.length > 0 ? (
                        serviceRequests.map((request) => (
                          <Grid item xs={12} md={6} key={request.id}>
                            <Card>
                              <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Avatar 
                                    src={request.clientImage} 
                                    sx={{ width: 50, height: 50, mr: 2 }}
                                  />
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="h3">
                                      {request.service}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      Client: {request.client}
                                    </Typography>
                                  </Box>
                                  <Chip 
                                    label={request.status} 
                                    color={request.status === 'Confirmed' ? 'success' : 'warning'}
                                    size="small"
                                  />
                                </Box>
                                
                                <Box sx={{ mt: 2 }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Clock size={16} />
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                      {request.date} ({request.duration})
                                    </Typography>
                                  </Box>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <MapPin size={16} />
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                      {request.address}
                                    </Typography>
                                  </Box>
                                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <DollarSign size={16} />
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                      {request.price}
                                    </Typography>
                                  </Box>
                                </Box>
                                
                                {request.status === 'Pending' && (
                                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                                    <Button 
                                      variant="contained" 
                                      color="success" 
                                      size="small" 
                                      startIcon={<CheckCircle size={16} />}
                                      onClick={() => handleAcceptRequest(request.id)}
                                      fullWidth
                                    >
                                      Accept
                                    </Button>
                                    <Button 
                                      variant="outlined" 
                                      color="error" 
                                      size="small" 
                                      startIcon={<XCircle size={16} />}
                                      onClick={() => handleDeclineRequest(request.id)}
                                      fullWidth
                                    >
                                      Decline
                                    </Button>
                                  </Box>
                                )}
                                
                                {request.status === 'Confirmed' && (
                                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                                    <Button 
                                      variant="contained" 
                                      color="primary" 
                                      size="small" 
                                      startIcon={<MessageSquare size={16} />}
                                      fullWidth
                                    >
                                      Contact Client
                                    </Button>
                                  </Box>
                                )}
                              </CardContent>
                            </Card>
                          </Grid>
                        ))
                      ) : (
                        <Grid item xs={12}>
                          <Paper sx={{ p: 3, textAlign: 'center' }}>
                            <Typography variant="body1" color="text.secondary">
                              No service requests at the moment.
                            </Typography>
                          </Paper>
                        </Grid>
                      )}
                    </Grid>
                  </Box>
                </motion.div>

                {/* Completed Services */}
                <motion.div variants={itemVariants}>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                    Completed Services
                    </Typography>
                    <Grid container spacing={3}>
                      {completedServices.length > 0 ? (
                        completedServices.map((request) => (
                          <Grid item xs={12} md={6} key={request.id}>
                            <Card>
                              <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Avatar 
                                    src={request.clientImage} 
                                    sx={{ width: 50, height: 50, mr: 2 }}
                                  />
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="h3">
                                      {request.service}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      Client: {request.client}
                                    </Typography>
                                  </Box>
                                  <Chip 
                                    label={request.status} 
                                    color={request.status === 'Completed' ? 'success' : 'warning'}
                                    size="small"
                                  />
                                </Box>
                                
                                <Box sx={{ mt: 2 }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Clock size={16} />
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                      {request.date} ({request.duration})
                                    </Typography>
                                  </Box>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <MapPin size={16} />
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                      {request.address}
                                    </Typography>
                                  </Box>
                                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <DollarSign size={16} />
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                      {request.price}
                                    </Typography>
                                  </Box>
                                </Box>
                                
      
                              </CardContent>
                            </Card>
                          </Grid>
                        ))
                      ) : (
                        <Grid item xs={12}>
                          <Paper sx={{ p: 3, textAlign: 'center' }}>
                            <Typography variant="body1" color="text.secondary">
                              No service completed at the moment.
                            </Typography>
                          </Paper>
                        </Grid>
                      )}
                    </Grid>
                  </Box>
                </motion.div>
                
                {/* Recent Reviews */}
                <motion.div variants={itemVariants}>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Recent Reviews
                    </Typography>
                    <Grid container spacing={3}>
                      {completedServices.length > 0 ? (
                        completedServices.map((service) => (
                          <Grid item xs={12} md={6} key={service.id}>
                            <Card>
                              <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Avatar 
                                    src={service.clientImage} 
                                    sx={{ width: 50, height: 50, mr: 2 }}
                                  />
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="h3">
                                      {service.client}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                      <Rating value={service.rating} precision={0.5} readOnly size="small" />
                                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                        {service.rating}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Typography variant="body2" color="text.secondary">
                                    {service.date.split(',')[0]}
                                  </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                  "Excellent service! Very professional and knowledgeable. The advice provided was extremely valuable for my business."
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                  Service: {service.service}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))
                      ) : (
                        <Grid item xs={12}>
                          <Paper sx={{ p: 3, textAlign: 'center' }}>
                            <Typography variant="body1" color="text.secondary">
                              No reviews yet.
                            </Typography>
                          </Paper>
                        </Grid>
                      )}
                    </Grid>
                  </Box>
                </motion.div>
              </>
            )}
            
            {/* Service Requests Tab */}
            {activeTab === 1 && (
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Service Requests
                  </Typography>
                  
                  <Paper sx={{ p: 2, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Pending Requests
                    </Typography>
                    <Grid container spacing={3}>
                      {serviceRequests.filter(req => req.status === 'Pending').length > 0 ? (
                        serviceRequests.filter(req => req.status === 'Pending').map((request) => (
                          <Grid item xs={12} key={request.id}>
                            <Card>
                              <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Avatar 
                                    src={request.clientImage} 
                                    sx={{ width: 50, height: 50, mr: 2 }}
                                  />
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="h3">
                                      {request.service}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      Client: {request.client}
                                    </Typography>
                                  </Box>
                                  <Chip 
                                    label={request.status} 
                                    color="warning"
                                    size="small"
                                  />
                                </Box>
                                
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                  <Grid item xs={12} md={8}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                      <Clock size={16} />
                                      <Typography variant="body2" sx={{ ml: 1 }}>
                                        {request.date} ({request.duration})
                                      </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                      <MapPin size={16} />
                                      <Typography variant="body2" sx={{ ml: 1 }}>
                                        {request.address}
                                      </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                      <DollarSign size={16} />
                                      <Typography variant="body2" sx={{ ml: 1 }}>
                                        {request.price}
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%' }}>
                                      <Button 
                                        variant="contained" 
                                        color="success" 
                                        startIcon={<CheckCircle size={16} />}
                                        onClick={() => handleAcceptRequest(request.id)}
                                        fullWidth
                                      >
                                        Accept
                                      </Button>
                                      <Button 
                                        variant="outlined" 
                                        color="error" 
                                        startIcon={<XCircle size={16} />}
                                        onClick={() => handleDeclineRequest(request.id)}
                                        fullWidth
                                      >
                                        Decline
                                      </Button>
                                      <Button 
                                        variant="outlined" 
                                        color="primary" 
                                        startIcon={<MessageSquare size={16} />}
                                        fullWidth
                                      >
                                        Message Client
                                      </Button>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))
                      ) : (
                        <Grid item xs={12}>
                          <Box sx={{ p: 2, textAlign: 'center' }}>
                            <Typography variant="body1" color="text.secondary">
                              No pending requests at the moment.
                            </Typography>
                          </Box>
                        </Grid>
                      )}
                    </Grid>
                  </Paper>
                  
                  <Paper sx={{ p: 2, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Confirmed Bookings
                    </Typography>
                    <Grid container spacing={3}>
                      {serviceRequests.filter(req => req.status === 'Confirmed').length > 0 ? (
                        serviceRequests.filter(req => req.status === 'Confirmed').map((request) => (
                          <Grid item xs={12} key={request.id}>
                            <Card>
                              <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Avatar 
                                    src={request.clientImage} 
                                    sx={{ width: 50, height: 50, mr: 2 }}
                                  />
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="h3">
                                      {request.service}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      Client: {request.client}
                                    </Typography>
                                  </Box>
                                  <Chip 
                                    label={request.status} 
                                    color="success"
                                    size="small"
                                  />
                                </Box>
                                
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                  <Grid item xs={12} md={8}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                      <Clock size={16} />
                                      <Typography variant="body2" sx={{ ml: 1 }}>
                                        {request.date} ({request.duration})
                                      </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                      <MapPin size={16} />
                                      <Typography variant="body2" sx={{ ml: 1 }}>
                                        {request.address}
                                      </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                      <DollarSign size={16} />
                                      <Typography variant="body2" sx={{ ml: 1 }}>
                                        {request.price}
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%' }}>
                                      <Button 
                                        variant="contained" 
                                        color="primary" 
                                        startIcon={<MessageSquare size={16} />}
                                        fullWidth
                                      >
                                        Contact Client
                                      </Button>
                              
                                    </Box>
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))
                      ) : (
                        <Grid item xs={12}>
                          <Box sx={{ p: 2, textAlign: 'center' }}>
                            <Typography variant="body1" color="text.secondary">
                              No confirmed bookings at the moment.
                            </Typography>
                          </Box>
                        </Grid>
                      )}
                    </Grid>
                  </Paper>
                  
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Completed Services
                    </Typography>
                    <Grid container spacing={3}>
                      {completedServices.length > 0 ? (
                        completedServices.map((service) => (
                          <Grid item xs={12} key={service.id}>
                            <Card>
                              <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Avatar 
                                    src={service.clientImage} 
                                    sx={{ width: 50, height: 50, mr: 2 }}
                                  />
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="h3">
                                      {service.service}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      Client: {service.client}
                                    </Typography>
                                  </Box>
                                  <Box sx={{ textAlign: 'right' }}>
                                    <Chip 
                                      label={service.status} 
                                      color="success"
                                      size="small"
                                      sx={{ mb: 1 }}
                                    />
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                      <Rating value={service.rating} precision={0.5} readOnly size="small" />
                                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                        {service.rating}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                  <Grid item xs={12} md={8}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                      <Clock size={16} />
                                      <Typography variant="body2" sx={{ ml: 1 }}>
                                        {service.date} ({service.duration})
                                      </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                      <MapPin size={16} />
                                      <Typography variant="body2" sx={{ ml: 1 }}>
                                        {service.address}
                                      </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                      <DollarSign size={16} />
                                      <Typography variant="body2" sx={{ ml: 1 }}>
                                        {service.price}
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  
                                </Grid>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))
                      ) : (
                        <Grid item xs={12}>
                          <Box sx={{ p: 2, textAlign: 'center' }}>
                            <Typography variant="body1" color="text.secondary">
                              No completed services yet.
                            </Typography>
                          </Box>
                        </Grid>
                      )}
                    </Grid>
                  </Paper>
                </Box>
              </motion.div>
            )}
            
            {/* My Services Tab */}
            {activeTab === 2 && (
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" component="h2">
                      My Professional Services
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary"
                      startIcon={<Plus size={16} />}
                    >
                      Add New Service
                    </Button>
                  </Box>
                  
                  <Grid container spacing={3}>
                    {myServices.map((service) => (
                      <Grid item xs={12} md={6} key={service.id}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="160"
                            image={service.image}
                            alt={service.title}
                          />
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <Typography variant="h6" component="h3" gutterBottom>
                                {service.title}
                              </Typography>
                              <Typography variant="h6" color="primary.main">
                                {service.price}
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {service.description}
                            </Typography>
                            
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                    
                  </Grid>
                </Box>
              </motion.div>
            )}
            
            {/* Earnings Tab */}
            {activeTab === 3 && (
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Earnings & Finances
                  </Typography>
                  
                  <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={6} md={3}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary" gutterBottom>
                            Today
                          </Typography>
                          <Typography variant="h3" component="div">
                            ${earnings.today}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary" gutterBottom>
                            This Week
                          </Typography>
                          <Typography variant="h3" component="div">
                            ${earnings.thisWeek}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary" gutterBottom>
                            This Month
                          </Typography>
                          <Typography variant="h3" component="div">
                            ${earnings.thisMonth}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary" gutterBottom>
                            Total Earnings
                          </Typography>
                          <Typography variant="h3" component="div">
                            ${earnings.total}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                  
                  <Paper sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                      Earnings by Service
                    </Typography>
                    <Box sx={{ overflowX: 'auto' }}>
                      <Box sx={{ minWidth: 650 }}>
                        <Box sx={{ display: 'flex', fontWeight: 'bold', p: 2, borderBottom: '1px solid #eee' }}>
                          <Box sx={{ flex: 3 }}>Service</Box>
                          <Box sx={{ flex: 1, textAlign: 'center' }}>Bookings</Box>
                          <Box sx={{ flex: 1, textAlign: 'center' }}>Rate</Box>
                          <Box sx={{ flex: 1, textAlign: 'center' }}>Total Hours</Box>
                          <Box sx={{ flex: 1, textAlign: 'center' }}>Revenue</Box>
                        </Box>
                        
                        {myServices.map((service) => (
                          <Box 
                            key={service.id} 
                            sx={{ 
                              display: 'flex', 
                              p: 2,
                              borderBottom: '1px solid #eee',
                              '&:hover': { bgcolor: '#f5f5f5' }
                            }}
                          >
                            <Box sx={{ flex: 3 }}>{service.title}</Box>
                            <Box sx={{ flex: 1, textAlign: 'center' }}>{Math.floor(Math.random() * 10) + 1}</Box>
                            <Box sx={{ flex: 1, textAlign: 'center' }}>{service.price}</Box>
                            <Box sx={{ flex: 1, textAlign: 'center' }}>{Math.floor(Math.random() * 20) + 5}</Box>
                            <Box sx={{ flex: 1, textAlign: 'center' }}>${Math.floor(Math.random() * 1000) + 200}</Box>
                          </Box>
                        ))}
                        
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            p: 2,
                            borderTop: '2px solid #eee',
                            fontWeight: 'bold'
                          }}
                        >
                          <Box sx={{ flex: 3 }}>Total</Box>
                          <Box sx={{ flex: 1, textAlign: 'center' }}>12</Box>
                          <Box sx={{ flex: 1, textAlign: 'center' }}>-</Box>
                          <Box sx={{ flex: 1, textAlign: 'center' }}>42</Box>
                          <Box sx={{ flex: 1, textAlign: 'center' }}>${earnings.thisMonth}</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                 
                </Box>
              </motion.div>
            )}
            
            {/* Certifications Tab */}
            {activeTab === 4 && (
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" component="h2">
                      Professional Certifications
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary"
                      startIcon={<Plus size={16} />}
                    >
                      Add Certification
                    </Button>
                  </Box>
                  
                  <Grid container spacing={3}>
                    {certifications.map((cert) => (
                      <Grid item xs={12} md={6} key={cert.id}>
                        <Card>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                              <Avatar sx={{ bgcolor: 'primary.light', mr: 2 }}>
                                <Award size={24} />
                              </Avatar>
                              <Box sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <Typography variant="h6" component="h3">
                                    {cert.title}
                                  </Typography>
                                  {cert.verified && (
                                    <Chip 
                                      icon={<Shield size={14} />} 
                                      label="Verified" 
                                      color="success" 
                                      size="small" 
                                    />
                                  )}
                                </Box>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                  {cert.issuer}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  Issued: {cert.date}
                                </Typography>
                              </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                              <Button 
                                variant="outlined" 
                                color="primary"
                                startIcon={<FileText size={16} />}
                                fullWidth
                              >
                                View Certificate
                              </Button>
                              
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                    
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

export default ServiceProviderProfessional
