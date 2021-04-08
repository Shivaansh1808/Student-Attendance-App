import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAUTm2gRbamQ5RLvrhQcZpEnuyKRlrCIK4",
    authDomain: "project-c60-9854e.firebaseapp.com",
    databaseURL: "https://project-c60-9854e-default-rtdb.firebaseio.com",
    projectId: "project-c60-9854e",
    storageBucket: "project-c60-9854e.appspot.com",
    messagingSenderId: "890522366873",
    appId: "1:890522366873:web:159c3194dadd991acdd908"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
} 
 
  export default firebase.database();