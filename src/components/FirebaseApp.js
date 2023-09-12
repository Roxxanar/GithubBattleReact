import { initializeApp } from 'firebase/app';
import firebaseConfig from "../firebaseConfig";
import { getDatabase } from "firebase/database";
import { ref, set } from "firebase/database";


const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


// const db = getDatabase();
// const auth = getAuth();

// const userId = auth.currentUser.uid;
// return onValue(ref(db, '/users/' + userId), (snapshot) => {
//   const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// }, {
//   onlyOnce: true
// });