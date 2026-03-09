import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcS39_Vt2Bd6FtZWl-VvlZrnxn7bNEgfA",
    authDomain: "art-united-38320.firebaseapp.com",
    projectId: "art-united-38320",
    storageBucket: "art-united-38320.appspot.com",
    messagingSenderId: "65737348243",
    appId: "1:65737348243:web:24c603eda7a5c5376c2966",
    measurementId: "G-VGFPRQDDNM"
  };


  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;