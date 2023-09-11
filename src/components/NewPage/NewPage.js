
import UserProfile from "../UserProfile/UserProfile";
import "./NewPage.css";
import { Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { app } from "../FirebaseApp";


function NewPage() {
  
  const auth = getAuth();

  const signouthandle = () => {
signOut(auth).then(() => {
  console.log("Sign-out successful");
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
        <UserProfile/>
        
      </div>
    </>
  );
}

export default NewPage;
