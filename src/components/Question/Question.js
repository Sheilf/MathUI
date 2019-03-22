import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Question.css';
import '../../firebase-init';
import * as firebase from 'firebase';
let db = firebase.firestore();
let users = db.collection("users");

/*
props

        onQuestion: this.props.onQuestion,
        chapter: this.props.chapter,
        course: this.props.course,
        studyroom: [this.props.course,this.props.chapter]

*/

class Question extends Component {
  constructor(props){
    super(props);
    this.state={
        nodeIsVisited: false

    }
    
  }
  componentDidMount(){

    let course = this.props.course;
    let chapter = this.props.chapter;
    let question = this.props.questionCount+"";

    firebase.auth().onAuthStateChanged(user=> {
      if (user) {

        // alert("user is logged")
      users.doc(
        user.uid
      ).collection(
        course
      ).doc(
        chapter
      ).collection(
        question
      ).doc(
        "data"
      ).get().then(doc => {
          if(doc.data().visited==true){ 
            document.getElementById(this.props.questionCount+"").style.backgroundColor="#FFF700";
      
            if(doc.data().questionCompleted){
              document.getElementById(this.props.questionCount).style.backgroundColor="#00FFFF";
            }     
          }else{

          }
      })
    
  
      }else{
      }
    })

    this.setState({nodeIsVisited: !this.state.nodeIsVisited})

  }

  render() {

    return (
      <section id={this.props.questionCount} className="Question flex-border-column-centered">
          {this.props.questionCount}
      </section>
    );
  }
}

export default Question;


