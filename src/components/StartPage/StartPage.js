import icon from "./icon-github.png";
import logo from "./battle-github-logo.PNG";
import "./StartPage.css";
import { Link } from "react-router-dom";
import { app } from "../FirebaseApp";


import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";


function StartPage() {

  const provider = new GithubAuthProvider();

  const auth = getAuth();

  const signuphandle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    localStorage.setItem("accessToken", token);
    // The signed-in user info.
    const user = result.user;
   
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });

  return (
    <>
      <div className="App-container">
        <img src={logo} className="App-logo" alt="logo" />

       <br></br>

        <p> Welcome to Github Battle!</p>
        <p>
          Discover and compare profiles against each other and see who wins the
          most duels
        </p>
        <p>Join the battle and let the coding games begin!</p>

        <br></br>
        <br></br>

        <div className="LogIn">
          <img src={icon} className="Icon-github" alt="icon-github" />
          <Link to="/firstpage">
          <button onClick={signuphandle} className="LogInWithGithub">Log In With Github</button>
        </Link>
        </div>
      
          
        
        
      </div>
    </>
  );
}

export default StartPage;
