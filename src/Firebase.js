import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebase=()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyBfUaCc-TnYBnDvZWsZbw_iwvXaiX7wJnY",
    authDomain: "bio-rad-d0623.firebaseapp.com",
    databaseURL: "https://bio-rad-d0623-default-rtdb.firebaseio.com",
    projectId: "bio-rad-d0623",
    storageBucket: "bio-rad-d0623.appspot.com",
    messagingSenderId: "598129995413",
    appId: "1:598129995413:web:82ccacb8f6bb1e3a1f359c"
  };
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}


export default firebase;