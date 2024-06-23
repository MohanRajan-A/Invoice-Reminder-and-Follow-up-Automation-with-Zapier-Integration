
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '../config';
import axios from 'axios';

const GoogleLoginComponent = ({ setAuthenticated }) => {
  const handleSuccess = async (response) => {
    try {
      const result = await axios.post('/api/auth/google', {
        token: response.credential,
      });
      if (result.status === 200) {
        setAuthenticated(true);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={handleSuccess}
      onFailure={handleError}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginComponent;
