
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
import '../../firebase-init';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

let db = firebase.firestore();
let users = db.collection("users");


/*
Sign in with popup.

if user exists in User Collection, set first visit document to false
if the user is new, create add the user to the User Collection and set the first visit to true.

Then call call a rerender with login state.
If state is logged in, Redirect to /session
Else display login page at "/"


TODO
Redirect to an user-type page on first login. Users will choose whether they're a teacher or a student.

*/
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
      if(user){
        users.doc(user.uid).get().then(doc =>{
            if(doc.data()){
              users.doc(user.uid).set({
                firstVisit: false
              })
            }else{
              users.doc(user.uid).set({
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
