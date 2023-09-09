import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

function AuthCallback() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");

    if (code) {
      // Send a POST request to GitHub to exchange the code for an access token
      axios
        .post("/auth-exchange", { code })
        .then((response) => {
          const { access_token } = response.data;

          // Store the access token (e.g., in local storage or context)
          localStorage.setItem("access_token", access_token);

          // Redirect the user to the desired page
          history.push("/firstpage");
        })
        .catch((error) => {
          console.error("Error exchanging code for access token:", error);
        });
    }
  }, [location, history]);

  return <div>Redirecting...</div>;
}

export default AuthCallback;
