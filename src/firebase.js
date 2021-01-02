import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbvBldBkKqaYHln-LFZQUNY-xozzT91vk",
  authDomain: "clone-7d564.firebaseapp.com",
  projectId: "clone-7d564",
  storageBucket: "clone-7d564.appspot.com",
  messagingSenderId: "842260641972",
  appId: "1:842260641972:web:9ea6f0c873f10944047fe1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
