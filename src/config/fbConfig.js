import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB0K9vGxKt4WHJ9fCAyr8miRdvtfQq5fgM",
  authDomain: "deployments-292411.firebaseapp.com",
  databaseURL: "https://deployments-292411.firebaseio.com",
  projectId: "deployments-292411",
  storageBucket: "deployments-292411.appspot.com",
  messagingSenderId: "1036670751455",
  appId: "1:1036670751455:web:095688784151a8b26b8f6a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
