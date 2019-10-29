import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDMqbaezROsHlJcriCkg-H_ZERhKgRw88Q",
    authDomain: "upwork-login-4deb1.firebaseapp.com",
    databaseURL: "https://upwork-login-4deb1.firebaseio.com",
    projectId: "upwork-login-4deb1",
    storageBucket: "upwork-login-4deb1.appspot.com",
    messagingSenderId: "814726348181",
    appId: "1:814726348181:web:96de61e58aa4cea1ebca9c",
    measurementId: "G-WG3QLNRPPT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;