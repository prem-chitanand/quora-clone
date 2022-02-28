import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAszesoaPKC9nvUoCKjamjK8acOzCOGaYM",
  authDomain: "quora-clone-4c0d6.firebaseapp.com",
  projectId: "quora-clone-4c0d6",
  storageBucket: "quora-clone-4c0d6.appspot.com",
  messagingSenderId: "788861723378",
  appId: "1:788861723378:web:634ccc3bd4fe844e9e666b",
  measurementId: "G-J4T802FRSL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };

