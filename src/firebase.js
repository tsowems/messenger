import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDfLzk_-4vSXw0-xluIdw1i6vWMdI-0Oi8",
    authDomain: "facebook-messenger-clone-7198f.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-7198f-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-7198f",
    storageBucket: "facebook-messenger-clone-7198f.appspot.com",
    messagingSenderId: "174486207318",
    appId: "1:174486207318:web:754e8838d8785f9d56b4f7",
    measurementId: "G-ZNC6WL431C"
});

const db = firebaseApp.firestore();

export default db;