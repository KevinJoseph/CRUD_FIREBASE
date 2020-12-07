import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKqmaFx2Uv8lpREdRQ33_9CPCQ4SnX3Mg",
  authDomain: "certifapp-bd.firebaseapp.com",
  databaseURL: "https://certifapp-bd-default-rtdb.firebaseio.com",
  projectId: "certifapp-bd",
  storageBucket: "certifapp-bd.appspot.com",
  messagingSenderId: "54485478783",
  appId: "1:54485478783:web:f52225659918f5fa12be4a",
  measurementId: "G-3CZQEBRPS8"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();