import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9wnj76c77XeFXomG6kV3d8OibvElkMCQ",
  authDomain: "new-challange-ea24c.firebaseapp.com",
  databaseURL: "https://new-challange-ea24c.firebaseio.com",
  projectId: "new-challange-ea24c",
  storageBucket: "new-challange-ea24c.appspot.com",
  messagingSenderId: "341269818368",
  appId: "1:341269818368:web:8bee099de1bc5c0487fce5"
};

   const firebaseApp=firebase.initializeApp(firebaseConfig);

   const db =firebaseApp.firestore();
   const auth =firebase.auth();

   export{db, auth};