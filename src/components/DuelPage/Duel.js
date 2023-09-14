import React, { useState, useEffect } from "react";
import "./Duel.css";
import { app } from "../FirebaseApp";

var player1 = 0;
var player2 = 0;

function Duel() {
  const [userData, setUserData] = useState(null);
  const [userData2, setUserData2] = useState(null);

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

        setUserData2(data);

        if (userData.followers > userData2.followers) {
          player1++;
        } else if (userData2.followers > userData.followers) {
          player2++;
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub user data:", error);
      });
  }, []);

  return (
    <>
      <div className="App-container-duel">
        <div className="players-container">
          <div className="container-1">
            <h2>Player 1</h2>
            {userData ? (
              <div className="GithubProfile">
                <p>{userData.login}</p>
                <img
                  style={{ width: "150px" }}
                  src={userData.avatar_url}
                  alt={userData.login}
                />
                <p>Public Repositories: {userData.public_repos}</p>
                <p>Followers: {userData.followers}</p>
                {/* Display other user details as needed */}
              </div>
            ) : (
              <p>Loading GitHub user data...</p>
            )}
          </div>
          <div className="container-2">
            <h2>Player 2</h2>
            {userData2 ? (
              <div className="GithubProfile">
                <p>{userData2.login}</p>
                <img
                  style={{ width: "150px" }}
                  src={userData2.avatar_url}
                  alt={userData2.login}
                />
                <p>Public Repositories: {userData.public_repos}</p>
                <p>Followers: {userData2.followers}</p>
                {/* Display other user details as needed */}
              </div>
            ) : (
              <p>Loading GitHub user data...</p>
            )}
          </div>
          <div className="winner-container">
            <h2>
              Winner:{" "}
              {player1 !== player2
                ? player1 > player2
                  ? userData.login
                  : userData2.login
                : "Egalitate"}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Duel;
