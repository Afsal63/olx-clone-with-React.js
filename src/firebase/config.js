import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCr6o6vXoxIfb3Fkmfci06Nsrl5rgDYaQc",
    authDomain: "olx-clone-c3743.firebaseapp.com",
    projectId: "olx-clone-c3743",
    storageBucket: "olx-clone-c3743.appspot.com",
    messagingSenderId: "367751136860",
    appId: "1:367751136860:web:191e11ae93dbcbdd990899",
    measurementId: "G-CTNX3TZRPH"
  };
  export default  firebase.initializeApp(firebaseConfig)