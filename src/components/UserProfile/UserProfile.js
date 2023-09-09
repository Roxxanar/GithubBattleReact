import React, { useEffect, useState } from 'react';
import axios from 'axios';


function UserProfile(props) {
  const [userData, setUserData] = useState(null);
  const userAccessToken = props.accessToken; // Replace with your actual user access token

  useEffect(() => {
    // Create a function to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://api.github.com/user', {
          headers: {
            Authorization: `Bearer ${userAccessToken}`,
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });

        // Update the state with the user data
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, [userAccessToken]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.login}'s GitHub Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Followers: {userData.followers}</p>
      {/* Display other user data */}
    </div>
  );
}

export default UserProfile;
