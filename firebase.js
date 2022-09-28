// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmclbSvyC5z5v-LznlQQHxsmPbl2rk5vw",
  authDomain: "audio-app-4a282.firebaseapp.com",
  projectId: "audio-app-4a282",
  storageBucket: "audio-app-4a282.appspot.com",
  messagingSenderId: "355850616777",
  appId: "1:355850616777:web:a94d133d08e2f357abf218",
  measurementId: "G-H3ZBPFPY3K"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}

const auth = firebase.auth();

const analytics = getAnalytics(app);

export {auth};