import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDH30c5ng5C7QijkWFoNrhZiNxsef_JO8Y",
    authDomain: "phongvu-4eee2.firebaseapp.com",
    databaseURL: "https://phongvu-4eee2-default-rtdb.firebaseio.com",
    projectId: "phongvu-4eee2",
    storageBucket: "phongvu-4eee2.appspot.com",
    messagingSenderId: "885688104318",
    appId: "1:885688104318:web:f6cd9961d07dd3496f6f2f",
    measurementId: "G-0XHG43489Y"
};

firebase.initializeApp(firebaseConfig);
// const gotData = (data) => {
//     console.log(data.val());
// }

// const errData = (err) => {
//     console.log(err, 'error')
// }

const database = firebase.database().ref('laptops')

export default database;