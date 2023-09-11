import React, { useState, useEffect } from "react";
import "./UserProfile.css"


const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Make a request to the GitHub API using the access token
    const accessToken = localStorage.getItem("accessToken");
    fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub user data:", error);
      });
  }, []);

  return (
    <div>
      <h2>GitHub Profile</h2>
      {userData ? (
        <div className="GithubProfile">
          <p>{userData.login}</p>
          <img style={{ width: "150px" }} src={userData.avatar_url} alt={userData.login} />
          <p>Public Repositories: {userData.public_repos}</p>
<p>Followers: {userData.followers}</p>
          {/* Display other user details as needed */}
        </div>
      ) : (
        <p>Loading GitHub user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
