
import UserProfile from "../UserProfile/UserProfile";
import "./NewPage.css";
import { Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { app } from "../FirebaseApp/FirebaseApp";


function NewPage() {
  
  const auth = getAuth();

  const signouthandle = () => {
signOut(auth).then(() => {
  console.log("Sign-out successful");
  localStorage.removeItem('accessToken');
}).catch((error) => {
  // An error happened.
});

}
  return (
    <>
      <div className="App-container-newpage">
        <div className="LogOut-container">
        <Link to="/homepage">
          <button onClick={signouthandle} className="LogOut">Log Out</button>
</Link>
  
        </div>
        <div className="UserProfile-container">
        <UserProfile/>
        </div>
        <div className="StartPl-container">
        <Link to="/playpage">
        <button className="StartPlaying">Start Playing</button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default NewPage;
