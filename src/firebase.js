import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjlXU3dhyOeNSrJRsxNrb_EifQE1-y27w",
  authDomain: "netflix-clone-new-34762.firebaseapp.com",
  databaseURL: "https://netflix-clone-new-34762-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-new-34762",
  storageBucket: "netflix-clone-new-34762.appspot.com",
  messagingSenderId: "12636940116",
  appId: "1:12636940116:web:9bd64654462652ab2e0ac1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
