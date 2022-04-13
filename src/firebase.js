import firebase from "firebase/app"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyBwyJI30SqqascrpbBpy7vuk75Y2LqWyYY",
    authDomain: "dino-jobs.firebaseapp.com",
    projectId: "dino-jobs",
    storageBucket: "dino-jobs.appspot.com",
    messagingSenderId: "552569024501",
    appId: "1:552569024501:web:add672466bb1196cd73abc",
    measurementId: "G-5MZV24H1MC"
  };

  const app = firebase.initializeApp(firebaseConfig);

 export const auth = app.auth()
export default app