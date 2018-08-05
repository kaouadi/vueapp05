import firebase  from "firebase"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBP_UQF4klSKo4nLrJOMUOndM5keLPpyB0",
    authDomain: "geo-ninja-745d2.firebaseapp.com",
    databaseURL: "https://geo-ninja-745d2.firebaseio.com",
    projectId: "geo-ninja-745d2",
    storageBucket: "",
    messagingSenderId: "576392135198"
  };

  const firebaseApp =  firebase.initializeApp(config);

  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  // export database
  export default firebaseApp.firestore()
