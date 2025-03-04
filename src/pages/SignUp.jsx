import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Divider,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, ToggleLeft as Google } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get('type') || 'client';
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      // Store user data in localStorage
      const userData = {
        id: Date.now().toString(),
        fullName: formData.fullName,
        email: formData.email,
        userType: userType,
        createdAt: new Date().toISOString()
      };
      
      // Get existing users or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email already exists
      const emailExists = existingUsers.some(user => user.email === formData.email);
      if (emailExists) {
        setLoading(false);
        setError('Email already in use');
        return;
      }
      
      // Add new user
      localStorage.setItem('users', JSON.stringify([...existingUsers, userData]));
      
      // Store current user
      localStorage.setItem('currentUser', JSON.stringify(userData));
      
      setLoading(false);
      setSuccess(true);
      
      // Redirect based on user type
      setTimeout(() => {
        if (userType === 'client') {
          navigate('/client-home');
        } else if (userType === 'provider-generic') {
          navigate('/provider-generic');
        } else if (userType === 'provider-professional') {
          navigate('/provider-professional');
        }
      }, 1500);
    }, 1500);
  };
  
  const handleGoogleSignUpSuccess = (credentialResponse) => {
    setError('');
    setLoading(true);
    
    try {
      // Decode the JWT token to get user information
      const decodedToken = jwtDecode(credentialResponse.credential);
      console.log("Google user info:", decodedToken);
      
      const userData = {
        id: decodedToken.sub,
        fullName: decodedToken.name,
        email: decodedToken.email,
        userType: userType,
        createdAt: new Date().toISOString(),
        picture: decodedToken.picture
      };
      
      // Get existing users or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email already exists
      const existingUser = existingUsers.find(user => user.email === userData.email);
      if (existingUser) {
        // Update existing user with the selected user type
        const updatedUsers = existingUsers.map(user => 
          user.email === userData.email ? { ...user, userType: userType } : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        
        // Update current user
        localStorage.setItem('currentUser', JSON.stringify({ ...existingUser, userType: userType }));
      } else {
        // Add new user
        localStorage.setItem('users', JSON.stringify([...existingUsers, userData]));
        
        // Store current user
        localStorage.setItem('currentUser', JSON.stringify(userData));
      }
      
      setLoading(false);
      setSuccess(true);
      
      // Redirect based on user type
      setTimeout(() => {
        if (userType === 'client') {
          navigate('/client-home');
        } else if (userType === 'provider-generic') {
          navigate('/provider-generic');
        } else if (userType === 'provider-professional') {
          navigate('/provider-professional');
        }
      }, 1500);
    } catch (error) {
      console.error("Google sign-up error:", error);
      setLoading(false);
      setError('Failed to sign up with Google. Please try again.');
    }
  };
  
  const handleGoogleSignUpError = () => {
    setError('Google sign-up failed. Please try again.');
  };
  
  // Get user type title
  const getUserTypeTitle = () => {
    switch(userType) {
      case 'client':
        return 'Client';
      case 'provider-generic':
        return 'Generic Service Provider';
      case 'provider-professional':
        return 'Professional Service Provider';
      default:
        return 'New User';
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
          alignItems: 'center',
          bgcolor: '#f5f5f5'
        }}
      >
        <Container maxWidth="sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper 
              elevation={3}
              sx={{ 
                p: 4,
                borderRadius: 2
              }}
            >
              <Typography 
                variant="h4" 
                component="h1" 
                align="center" 
                gutterBottom
                sx={{ mb: 3 }}
              >
                Sign Up as {getUserTypeTitle()}
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <User size={20} />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail size={20} />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock size={20} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock size={20} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={loading}
                  sx={{ mt: 3, mb: 2 }}
                >
                  {loading ? <CircularProgress size={24} /> : 'Sign Up'}
                </Button>
              </form>
              
              <Divider sx={{ my: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <GoogleLogin
                  onSuccess={handleGoogleSignUpSuccess}
                  onError={handleGoogleSignUpError}
                  useOneTap
                  theme="filled_blue"
                  text="signup_with"
                  shape="rectangular"
                  size="large"
                  width="100%"
                />
              </Box>
              
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Already have an account?{' '}
                  <Link to="/signin" style={{ color: '#3f51b5' }}>
                    Sign In
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>
      
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
        <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Account created successfully! Redirecting...
        </Alert>
      </Snackbar>
      
      <Footer />
    </Box>
  );
};

export default SignUp;