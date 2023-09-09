import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';

function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Verificați dacă există un cod temporar în query string
    const urlParams = new URLSearchParams(window.location.search);
    const sessionCode = urlParams.get("code");

    if (sessionCode) {
      // Dacă există un cod temporar, trimiteți-l înapoi la GitHub pentru a obține tokenul de acces
      axios.post('https://github.com/login/oauth/access_token', null, {
        params: {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code: sessionCode,
        },
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        const { access_token: newAccessToken } = response.data;
        setAccessToken(newAccessToken);
      })
      .catch((error) => {
        console.error('Eroare:', error);
      });
    }
  }, []);

  return (
    <div className="App">
      {accessToken ? (
        <div>
          <h1>Autentificare reușită!</h1>
          <p>Tokenul de acces: {accessToken}</p>
          {/* Aici puteți face cereri către API-ul GitHub cu tokenul de acces */}
        </div>
      ) : (
        <div>
          <h1>Autentificare cu GitHub</h1>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user`}
          >
            Autentificare cu GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
