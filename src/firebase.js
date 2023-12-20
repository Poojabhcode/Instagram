import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1-OXX9D5KFSUR0xxUhsTcDkJuJ2EiRQ0",
  authDomain: "reelstream-98474.firebaseapp.com",
  projectId: "reelstream-98474",
  storageBucket: "reelstream-98474.appspot.com",
  messagingSenderId: "307695472427",
  appId: "1:307695472427:web:c5564b10834a045fe0bf6e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();

export const database = {
    users: firestore.collection('users'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()
