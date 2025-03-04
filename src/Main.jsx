
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx';

// Google OAuth Client ID - Replace with your actual client ID from Google Cloud Console
const GOOGLE_CLIENT_ID = '660884864949-huvcc5bdvqio2406a70tmogph7ilkvbi.apps.googleusercontent.com';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);