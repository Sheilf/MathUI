import React, { Component } from 'react';
import './ForumView.css';
import '../../styles/flexborder.css';
import '../../firebase-init';
import * as firebase from 'firebase';

let db = firebase.firestore();
let auth = firebase.auth();

class ForumView extends Component {
    //to do
    //set props -> ForumView
    //

    constructor(props){
      super(props)
      this.state={
        currThread: "",
        title: "",
        content: ""
      }
    }

  componentDidMount(){
    console.log("Component Mounted")
    let classroom = this.props.match.params.classroom;
    let chapter= this.props.match.params.topic;
    let question = this.props.match.params.question;
    let id = this.props.match.params.id;




    db.collection(classroom).doc(chapter).collection(question).doc("questionData").collection("Forum Posts").doc(id).get().then(doc =>{
      this.setState({
        currThread: id,
        title: doc.data().title,
        content: doc.data().op
      })
    })



  } 
  render() {
    console.log("Render: "+this.state.title, this.state.content)
    console.log(this.state.currThread)
    return (
      
      <section className="ForumView flex-border-column-centered">
        <h1> {this.state.title} </h1>
        <p>{this.state.content}</p>
      </section>
    );
  }
}

export default ForumView;


