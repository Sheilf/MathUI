
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
// import Session from '../Session/Session';
import '../../firebase-init';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

let db = firebase.firestore();
let users = db.collection("users");

class Login extends Component{

  constructor(props){
    super(props);
    this.state={
      isSignedIn: false
    }

    this.uiConfig= {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
   
      console.log("user", user)
      // firebase.auth().signOut();

      if(user){
        users.doc(user.uid).get().then(doc =>{
            if(doc.data()){
              // alert("User is already in the database.")
              users.doc(user.uid).set({
                firstVisit: false
              })
            }else{
              // alert("Creating user.")
              users.doc(user.uid).set({
                firstVisit: true
              })
            }
            return doc
      }).then(doc =>{
        this.setState({ isSignedIn: !!user })
      })}else{
        // alert("No one is logged in");
      }

      // firebase.auth().signOut();

    })
  }

  render(){
    return(
    <section className="Login">
      {this.state.isSignedIn ? (
          <Redirect to="/session"/>
        ) : 
          (
          <div>
          <Redirect to="/"/>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          </div>
         )
      }

    </section>
    )
  }
}

export default Login;




// import React, { Component } from 'react';
// import '../../styles/flexborder.css';
// import './Login.css';
// import Button from '../Button/Button';
// import { Link } from 'react-router-dom';

// class Login extends Component {


//   render() {
//     return (
//       <section id={this.props.id} className="Login flex-border-column-centered">
        
//         <Link to="/session">
//           <Button button="start-session" />
//         </Link>
//       </section>
//     );
//   }
// }



// export default Login;
