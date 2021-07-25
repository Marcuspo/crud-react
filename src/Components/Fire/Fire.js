import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyBs3AdQIlnVsr_ACZORc_KFW_0YREyJC8I",
  authDomain: "desafiologlife.firebaseapp.com",
  projectId: "desafiologlife",
  storageBucket: "desafiologlife.appspot.com",
  messagingSenderId: "704143484333",
  appId: "1:704143484333:web:7445dad3d41e544aa36d24",
}
const fire = firebase.initializeApp(firebaseConfig)

export default fire
