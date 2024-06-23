import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from './config';
import GoogleLoginComponent from './components/GoogleLogin';
import InvoiceList from './components/InvoiceList';
import './App.css';
const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="App">
        {authenticated ? (
          <InvoiceList />
        ) : (
          <GoogleLoginComponent setAuthenticated={setAuthenticated} />
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;

