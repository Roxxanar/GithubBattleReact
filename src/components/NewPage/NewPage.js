
import UserProfile from "../UserProfile/UserProfile";
import "./NewPage.css";

function NewPage() {
  return (
    <>
      <div className="App-container-newpage">
        <div className="LogOut">
          <button className="LogOut">Log Out</button>

          {/* <NavLink to="/userpage">Tasks</NavLink> */}
        </div>
        
        <UserProfile accessToken={localStorage.getItem('access_token')} />
      </div>
    </>
  );
}

export default NewPage;
