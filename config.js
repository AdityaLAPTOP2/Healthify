import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCYm7XMnNnc3spNBfu8Q9s1xvO-L8Dl8OA",
  authDomain: "healthify-d7f5d.firebaseapp.com",
  databaseURL: "https://healthify-d7f5d.firebaseio.com",
  projectId: "healthify-d7f5d",
  storageBucket: "healthify-d7f5d.appspot.com",
  messagingSenderId: "1085589818220",
  appId: "1:1085589818220:web:f957d54e49b124ca2e0149",
  measurementId: "G-NSVPXR35KN"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
