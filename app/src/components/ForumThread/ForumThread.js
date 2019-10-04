import React, { Component } from 'react';
import './ForumThread.css';
import '../../styles/flexborder.css';
import '../../firebase-init';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';

let db = firebase.firestore();
let auth = firebase.auth();

class ForumThread extends Component {
    //to do
    //set props -> Forum
    //
    constructor(props){
        super(props)
        this.state={

        }

    }
  componentDidMount(){

    db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").collection("Forum Posts").get().then(querySnapshot => {
         
    })

  }
  render() {
    return (
      <section className="ForumThread flex-border-column-centered">
        <Link to={`${this.props.school}/${this.props.course}/${this.props.chapter}/${this.props.onQuestion}/forum/${this.props.id}`} className="flex-border-row-centered"> {this.props.title} </Link>

      </section>
    );
  }
}

export default ForumThread;


