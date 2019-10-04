
import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
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
    console.log("LOGIN MOUNTED")
    USERS = db.collection("users");
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        
          this.setState({ isSignedIn: !!user })
      }
    })
  }

  componentWillUnmount(){
    console.log("UNMOUNTING LOGIN...")
    if(this.state.isSignedIn){
      firebase.auth().onAuthStateChanged(user=>{
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
          
        })
      })
    }


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
              <Link id="developments-button" to="/developments">Developments In Progress</Link>

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
