import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCyaQgqJhZ2bIo4sHgmDFeHrAeDCMTKGtE",
  authDomain: "isobatakaigi-with-ks.firebaseapp.com",
  databaseURL: 'https://isobatakaigi-with-ks-default-rtdb.firebaseio.com/',
  projectId: "isobatakaigi-with-ks",
  storageBucket: "isobatakaigi-with-ks.appspot.com",
  messagingSenderId: "78596248161",
  appId: "1:78596248161:web:4bffa5be9852df556d1020"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};