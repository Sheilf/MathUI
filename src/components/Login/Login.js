
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
import '../../firebase-init';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

let db = firebase.firestore();
let USERS;

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
    USERS = db.collection("users");
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        USERS.doc(user.uid).get().then(doc =>{
            if(doc.data()){
              USERS.doc(user.uid).update({
                firstVisit: false
              })
            }else{
              USERS.doc(user.uid).set({
                firstVisit: true
              })
            }
            return doc
        }).then(doc =>{
          this.setState({ isSignedIn: !!user })
        })
      }


    })
  }

  render(){
    return(
      <section className="Login">
        {
          this.state.isSignedIn ? (
            <Redirect to="/session"/>
          ) : 
          (
            <div>
     
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
