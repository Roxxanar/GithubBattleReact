import backgroundImage from "./blurry-gradient-haikei.png";
import "./App.css";
import StartPage from "./components/StartPage/StartPage";

import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewPage from "./components/NewPage/NewPage";
import { useEffect } from "react";
import UserPage from "./UserPage.js"

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const accessToken = urlParams.get("access_token");
  
  useEffect(() => {
    if (accessToken) {
      // Redirect to the NewPage component with the access token
      window.location.href = '/newpage?access_token=' + accessToken;
    }
  }, [accessToken]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="App"
      >
        <StartPage />


        <BrowserRouter>
          <Routes>
          

            {/* <Route path="/" element={<StartPage />} /> */}
            <Route
              path="/userpage"
              element={<UserPage accessToken={accessToken} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
