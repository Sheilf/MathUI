import * as firebase from 'firebase';
 
// Initialize Firebase
 var config = {
    apiKey: "AIzaSyBUSFRHfHRkq0t3Q6AfZsLUG0XkEjBHkMo",
    authDomain: "mathui.firebaseapp.com",
    databaseURL: "https://mathui.firebaseio.com",
    projectId: "mathui",
    storageBucket: "mathui.appspot.com",
    messagingSenderId: "766377125069"
 };
 firebase.initializeApp(config);


 export default firebase;