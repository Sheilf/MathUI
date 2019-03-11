import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Topic.css';
import {Link} from 'react-router-dom';
import '../../firebase-init';
import * as firebase from 'firebase';
let db= firebase.firestore();
let users = db.collection('users');

class Topic extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    let classroom = this.props.classroom;
    let topic = this.props.value
    let onQuestion = [1,2,3,4,5,6,7,8,9,10];

    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let currentUser = user.uid;
        for(let i = 0; i < onQuestion.length; i++){
          
        }
  
      }else{
        // No user is signed in.
      }
    })

  }
  render() {
    return (
        <Link id="Topic-link" to={"/session/"+this.props.classroom+"/"+this.props.routemap}>
          <div className="Topic flex-border-column-centered">{this.props.value}</div>
        </Link>
    );
  }
}


/*

*/
export default Topic;
