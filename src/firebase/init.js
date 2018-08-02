import firebase  from "firebase"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLUq3cF8U21JEQdpERn4OgKipV31vzS4o",
    authDomain: "geo-ninja-6cb85.firebaseapp.com",
    databaseURL: "https://geo-ninja-6cb85.firebaseio.com",
    projectId: "geo-ninja-6cb85",
    storageBucket: "geo-ninja-6cb85.appspot.com",
    messagingSenderId: "1067900879045"
  };

  const firebaseApp =  firebase.initializeApp(config);

  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  // export database
  export default firebaseApp.firestore()
