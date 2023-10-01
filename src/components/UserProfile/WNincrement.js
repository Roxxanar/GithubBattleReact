import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, get } from "firebase/database";
import { app } from "../FirebaseApp/FirebaseApp";
import { useContext } from "react";
import { WinnerContext } from "../Winner-context";

function WNincrement() {
  const [databaseError, setDatabaseError] = useState(null);
  
  const winner = useContext(WinnerContext);
  console.log(winner);
  
  useEffect(() => {
    if (winner) {
      // If there's a winner, update their WN in the Firebase Realtime Database
      
      
      const db = getDatabase(app);
      const userRef = ref(db, `WinsNumber/${winner}/WN`); // Reference to the winner's WN

      // Increment the WN by 1
      set(userRef, (prevValue) => (prevValue || 0) + 1)
        .then(() => {
          // WN was successfully updated
          setDatabaseError(null); // Clear any previous errors
        })
        .catch((error) => {
          console.error(
            "Error updating WN in Firebase Realtime Database:",
            error
          );
          setDatabaseError(error.message); // Set the error message
        });

   
    }
  }, [winner]);

  return (
    <div>
      {databaseError && <p>Error: {databaseError}</p>}
      
    </div>
  );
}

export default WNincrement;
