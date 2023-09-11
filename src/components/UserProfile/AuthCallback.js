import React, { useEffect } from 'react';
import axios from 'axios';

import FirstPage from '../../pages/firstpage';


function AuthCallback() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    console.log(code);
    if (code) {
      const clientId = '9740fe79204307102624'; // Replace with your GitHub OAuth app's client ID
      const clientSecret = '804832ee6f80e55f46b47600fed0a1dbc51fed2e'; // Replace with your GitHub OAuth app's client secret
      const redirectUri = 'http://localhost:3000/callback'; // Replace with your app's redirect URI

      const params = {
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        redirect_uri: redirectUri,
      };

      console.log(params);

      axios.post('/github-access-token', {
        params: params,
        headers: {
          'Accept': 'application/json'
        }
        
      })
      .then(response => {
        // Handle the response data
        const userAccessToken = response.data.access_token;
        console.log('Access token:', userAccessToken);
    
        // Other code here...
      })
      .catch(error => {
        // Handle errors
        console.error('Error exchanging code for access token:', error);
      });
       
    }
  }, []);

  return (<>
  <FirstPage accessToken={localStorage.getItem('access_token')}/>
 
  
  </>);
}

export default AuthCallback;
