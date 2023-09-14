import "./PlayPage.css";
import { Link, NavLink } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { app } from "../FirebaseApp";

function PlayPage() {
  const auth = getAuth();

  const signouthandle = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="App-container-playpage">
        <div className="LogOut-container">
          <Link to="/homepage">
            <button onClick={signouthandle} className="LogOut">
              Log Out
            </button>
          </Link>
        </div>
        <Link to="/duelpage">
        <button
  className="FindOpponent"
  onClick={() => {
    console.log("Clicked Find Opponent");
    
  }}
>
  Find Opponent
</button>
        </Link>
      </div>
    </>
  );
}

export default PlayPage;
