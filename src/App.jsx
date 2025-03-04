import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ClientHome from './pages/ClientHome';
import ServiceProviderProfessional from './pages/ServiceProviderProfessional';
import UserTypeSelection from './pages/UserTypeSelection';
import ProviderTypeSelection from './pages/ProviderTypeSelection';
import ServiceProviderGeneric from './pages/ServiceProviderGeneric';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/ServiceHub">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user-type" element={<UserTypeSelection />} />
          <Route path="/provider-type" element={<ProviderTypeSelection />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/client-home" element={<ClientHome />} />
          <Route path="/provider-generic" element={<ServiceProviderGeneric />} />
          <Route path="/provider-professional" element={<ServiceProviderProfessional />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;