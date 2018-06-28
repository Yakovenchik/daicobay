import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBHZX_pzh9s0HV7QoRxiJKD-PaMUA3NxHw",
  authDomain: "daicobay-cf2fe.firebaseapp.com",
  databaseURL: "https://daicobay-cf2fe.firebaseio.com",
  projectId: "daicobay-cf2fe",
  storageBucket: "daicobay-cf2fe.appspot.com",
  messagingSenderId: "513330241686"
};

firebase.initializeApp(config);


const auth = firebase.auth();

export {
  auth,
};