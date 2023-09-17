import React, { useState, useEffect } from "react";
import "./GithubBattleProfile.css";
import { getDatabase } from "firebase/database";
import { ref, set } from "firebase/database"; // Import getDoc and doc
import { app } from "../FirebaseApp/FirebaseApp";

import WN from "./WN"
import WNincrement from "./WNincrement"

const GithubBattleProfile = (props) => {
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

        const githubLogin = data.login;
        console.log("GitHub Login:", githubLogin);
      
        // Initialize Firebase database reference
        const db = getDatabase(app);
            // Reference to the document with GitHub login as the key
        const userRef = ref(db, `WinsNumber/${githubLogin}`);

        // Check if the user exists in the database
        set(userRef, {
          githubLogin: githubLogin,
          WN: 0,
          // Add other user properties as needed
        })
          .then(() => {
            // Document creation in Firebase Realtime Database was successful
          })
          .catch((error) => {
            console.error("Error creating user document in Firebase Realtime Database:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching GitHub user data:", error);
      });
  }, []);

  return (
    <div className="container">
      {userData ? (
        <div className="GithubBattleProfile">
          <h2>{userData.login}</h2>
          <h2>Duels winned:</h2>
          {/* <WNincrement/> */}
           {/* <WN/> */}
        </div>
      ) : (
        <p>Loading GitHub user data...</p>
      )}
    </div>
  );
};

export default GithubBattleProfile;
