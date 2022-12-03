import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDEbdj8zyaGkKTSYGk6BHt9mcsVnGYqYvM",
    authDomain: "iinarchive-c89d6.firebaseapp.com",
    projectId: "iinarchive-c89d6",
    storageBucket: "iinarchive-c89d6.appspot.com",
    messagingSenderId: "550963483788",
    appId: "1:550963483788:web:332dd8f25b59503ae357a9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,storage,auth,provider}