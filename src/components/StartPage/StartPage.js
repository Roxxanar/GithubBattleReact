import icon from "./icon-github.png";
import logo from "./battle-github-logo.PNG";
import "./StartPage.css";
import {NavLink} from "react-router-dom";


function StartPage() {


  const handleLoginWithGithub = () => {
   
    // Redirect the user to GitHub OAuth authorization URL
    window.location.href = `https://github.com/login/oauth/authorize?client_id=9740fe79204307102624&scope=user`;
  };

  return (
    <>
    <div className="App-container">
      <img src={logo} className="App-logo" alt="logo" />
      <p> Welcome to Github Battle!</p>
      <p>
        Discover and compare profiles against each other and see who wins the
        most duels
      </p>
      <p>Join the battle and let the coding games begin!</p>
      <div className="LogIn">
        <img src={icon} className="Icon-github" alt="icon-github" />

        <button 
        onClick={handleLoginWithGithub} className="LogInWithGithub">

          Log In With Github
        </button>
        
          {/* <NavLink to="/userpage">Tasks</NavLink> */}
       
       
      </div>
    </div>
   
    </>
  );
}

export default StartPage;
