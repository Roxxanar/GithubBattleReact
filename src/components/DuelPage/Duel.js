import React, { useState, useEffect } from "react";
import "./Duel.css";
import { app } from "../FirebaseApp/FirebaseApp";
import { Link } from "react-router-dom";
// import GithubBattleProfile from "../UserProfile/GithubBattleProfile";

import { WinnerContext } from "../Winner-context"; 


var player1 = 0;
var player2 = 0; 

function Duel() {
  const [userData, setUserData] = useState(null);
  const [userData2, setUserData2] = useState(null);
 const [Winner, setWinner]=useState(null);

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
          setWinner(userData.login);
          console.log(Winner);
        } else if (userData2.followers > userData.followers) {
          player2++;
          setWinner(userData2.login);
          console.log(Winner);
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub user data:", error);
      });
  }, [userData, userData2, Winner]);

 

  return (
    <>
    <WinnerContext.Provider value={Winner}>
      <div className="App-container-duel">
        <div className="players-container">
        <div className={`container-1 ${player1 > player2 ? 'green-bg' : player1 < player2 ? 'red-bg' : ''}`}>
  
  {userData ? (
    <div className="GithubProfile">
      
      <h2>Player 1</h2>
      <p>{userData.login}</p>
      <img
        style={{ width: "150px" }}
        src={userData.avatar_url}
        alt={userData.login}
      />
      <p>Public Repositories: {userData.public_repos}</p>
      <p>Followers: {userData.followers}</p>
      
    </div>
  ) : (
    <p>Loading GitHub user data...</p>
  )}
</div>


<div className={`container-2 ${player2 > player1 ? 'green-bg' : player2 < player1 ? 'red-bg' : ''}`}>
 
  {userData2 ? (
    <div className="GithubProfile">
       <h2>Player 2</h2>
      <p>{userData2.login}</p>
      <img
        style={{ width: "150px" }}
        src={userData2.avatar_url}
        alt={userData2.login}
      />
      <p>Public Repositories: {userData.public_repos}</p>
      <p>Followers: {userData2.followers}</p>
     
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
<div className="Back-container">
<Link to="/playpage">
        <button className="Back">
          Back
        </button>
        </Link>
        </div>
      </div>

      </WinnerContext.Provider>
    </>
  );
  
  
}

export default Duel;
