


// import React, { Component } from 'react';
// import './GoogleSignIn.css';
// import '../../styles/flexborder.css';
// import urlGoogleSignIn from '../../assets/images/google-dark.png'
// import '../../firebase-init';
// import * as firebase from 'firebase';
// import 'firebase/auth';

// let db = firebase.firestore();
// let users= db.collection("users");
// let auth = firebase.auth()


// /*
// DRYing out onAuthStateChanged..

// Setting at INDEX (it handles the Routes.) level might work if it spreads to subcomponents. (it should)


// It could also work here?


// */
// class GoogleSignIn extends Component {
//     //to do
//     //set props -> GoogleSignIn

//   constructor(props){
//     super(props)
//     this.state={

//     }

//     this.handleGoogleSignIn = this.handleGoogleSignIn.bind(this);
//   }

//   componentDidMount(){
//     firebase.auth().onAuthStateChanged(function(user) {
//       if (user) {
//         console.log("User is signed in")
//         // alert("You are logged in as "+user.email);
//         document.getElementById('quickstart-sign-in').innerHTML = "Sign Out"; 
//         let currentUser = user.uid;
//         // let cart = {}
        
//         //SET A NEW USER INTO USER DATABASE
//         users.doc(currentUser).get().then((doc)=>{
//             if(doc.data()){

//             }else{
//             //   alert("new user is setup");
//             //   users.doc(currentUser).set({
//             //     displayName: user.displayName,
//             //     email: user.email
//             //   })



//             }

//         })



    


      

        
//       } else {
//         document.getElementById('quickstart-sign-in').innerHTML = `<img src=${urlGoogleSignIn} />`;

//       }
//     }); //end firebase.auth() state listener
  
//   }

//   handleGoogleSignIn(){
//     if (!firebase.auth().currentUser) {
//       var provider = new firebase.auth.GoogleAuthProvider();
//       provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      
//       firebase.auth().signInWithPopup(provider).then(function(result) {
//         //This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
        
//         // The signed-in user info.
//         //var user = result.user;
        
//         //document.getElementById('quickstart-oauthtoken').textContent = token

//       }).catch(function(error) {
//         // // Handle Errors here.
//         var errorCode = error.code;
//         // var errorMessage = error.message;
//         // // The email of the user's account used.
//         // var email = error.email;
//         // // The firebase.auth.AuthCredential type that was used.
//         // var credential = error.credential;
   
//         if (errorCode === 'auth/account-exists-with-different-credential') {
//           alert('You have already signed up with a different auth provider for that email.');

//         } else {

//         }
 
//       });
  
//     }
//     else { 
//       firebase.auth().signOut();
//     }
//   }
//   render() {
//     return (
//         <button id="quickstart-sign-in" className="GoogleSignIn" onClick={this.handleGoogleSignIn}><img src={urlGoogleSignIn}/> </button>
//     );
//   }
// }

// export default GoogleSignIn;


