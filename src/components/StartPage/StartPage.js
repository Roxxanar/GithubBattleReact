import icon from "./icon-github.png";
import logo from "./battle-github-logo.PNG";
import "./StartPage.css";
// import AuthCallback from "../UserProfile/AuthCallback";

// import { Link } from "react-router-dom";

function StartPage() {

  const handleLoginWithGithub = () => {
    // Replace with your GitHub OAuth application's client ID
    const clientId = '9740fe79204307102624';
    const redirectUri = 'http://localhost:3000/callback'; // Should match the callback URL you set up
    const scope = 'user'; // Additional scopes can be added here

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = authUrl;
  };


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
        
          <button onClick={handleLoginWithGithub} className="LogInWithGithub">Log In With Github</button>
        
        </div>
        {/* <Link to="/auth/callback">
          <button className="StartPlaying">Start Playing</button>
        </Link> */}
        
      </div>
    </>
  );
}

export default StartPage;
