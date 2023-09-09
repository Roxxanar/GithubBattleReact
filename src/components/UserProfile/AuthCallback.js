import React, { useEffect } from 'react';
import axios from 'axios';

import FirstPage from '../../pages/firstpage';


function AuthCallback() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      const clientId = '9740fe79204307102624'; // Replace with your GitHub OAuth app's client ID
      const clientSecret = '48d188cce6e8a4fefd6317f9b8013f8868690b6c'; // Replace with your GitHub OAuth app's client secret
      const redirectUri = 'http://localhost:3000/callback'; // Replace with your app's redirect URI

      const params = {
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        redirect_uri: redirectUri,
      };

      axios.post('https://github.com/login/oauth/access_token', null, {
        params: params,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        const userAccessToken = response.data.access_token;

      
        // You can store the access token in local storage, context, or state
        localStorage.setItem('access_token', userAccessToken);
      console.log(userAccessToken);
        // Redirect the user to the desired page, e.g., your app's home page
        window.location.href = '/'; // Replace with your desired page
      }).catch(error => {
        console.error('Error exchanging code for access token:', error);
      });
      
    }
  }, []);

  return (<>
  <FirstPage accessToken={localStorage.getItem('access_token')}/>
 
  
  </>);
}

export default AuthCallback;
