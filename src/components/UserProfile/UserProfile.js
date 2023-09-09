import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ accessToken }) => {

   
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (accessToken) {
      // Make a request to fetch user information using the access token
      axios
        .get('https://api.github.com/user', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data', error);
        });
    }
  }, [accessToken]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.login}'s GitHub Profile</h2>
      <p>Name: {user.name}</p>
      <p>Followers: {user.followers}</p>
      {/* Display other user data */}
    </div>
  );
};

export default UserProfile;