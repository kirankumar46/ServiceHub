import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { Eye, EyeOff, Mail, Lock, ToggleLeft as Google } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignIn = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
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
    if (!formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Find user by email
      const user = users.find(user => user.email === formData.email);
      
      if (!user) {
        setLoading(false);
        setError('Invalid email or password');
        return;
      }
      
      // In a real app, you would verify the password here
      // For this demo, we'll just log the user in
      
      // Store current user
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      setLoading(false);
      setSuccess(true);
      
      // Redirect based on user type
      setTimeout(() => {
        if (user.userType === 'client') {
          navigate('/client-home');
        } else if (user.userType === 'provider-generic') {
          navigate('/provider-generic');
        } else if (user.userType === 'provider-professional') {
          navigate('/provider-professional');
        } else {
          navigate('/client-home'); // Default
        }
      }, 1500);
    }, 1500);
  };
  
  const handleGoogleSignInSuccess = (credentialResponse) => {
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
        userType: 'client', // Default to client
        createdAt: new Date().toISOString(),
        picture: decodedToken.picture
      };
      
      // Store user data if not exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (!existingUsers.some(user => user.email === userData.email)) {
        localStorage.setItem('users', JSON.stringify([...existingUsers, userData]));
      } else {
        // Update existing user with latest Google info
        const updatedUsers = existingUsers.map(user => 
          user.email === userData.email ? { ...user, fullName: userData.fullName, picture: userData.picture } : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
      }
      
      // Store current user
      localStorage.setItem('currentUser', JSON.stringify(userData));
      
      setLoading(false);
      setSuccess(true);
      
      // Redirect to client home
      setTimeout(() => {
        navigate('/client-home');
      }, 1500);
    } catch (error) {
      console.error("Google sign-in error:", error);
      setLoading(false);
      setError('Failed to sign in with Google. Please try again.');
    }
  };
  
  const handleGoogleSignInError = () => {
    setError('Google sign-in failed. Please try again.');
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
                Sign In
              </Typography>
              
              <form onSubmit={handleSubmit}>
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
                
                <Box sx={{ textAlign: 'right', mt: 1 }}>
                  <Link to="#" style={{ color: '#3f51b5', textDecoration: 'none' }}>
                    <Typography variant="body2">
                      Forgot password?
                    </Typography>
                  </Link>
                </Box>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={loading}
                  sx={{ mt: 3, mb: 2 }}
                >
                  {loading ? <CircularProgress size={24} /> : 'Sign In'}
                </Button>
              </form>
              
              <Divider sx={{ my: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <GoogleLogin
                  onSuccess={handleGoogleSignInSuccess}
                  onError={handleGoogleSignInError}
                  useOneTap
                  theme="filled_blue"
                  text="signin_with"
                  shape="rectangular"
                  size="large"
                  width="100%"
                />
              </Box>
              
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{' '}
                  <Link to="/user-type" style={{ color: '#3f51b5' }}>
                    Sign Up
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
          Signed in successfully! Redirecting...
        </Alert>
      </Snackbar>
      
      <Footer />
    </Box>
  );
};

export default SignIn;