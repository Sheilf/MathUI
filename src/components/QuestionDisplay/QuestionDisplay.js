import React, { Component } from 'react';
import './QuestionDisplay.css';
import '../../styles/flexborder.css';
import * as firebase from 'firebase';
let db = firebase.firestore();
let users = db.collection("users");
let userData;

class QuestionDisplay extends Component {
  constructor(props){
    super(props);
    this.state={
      answer: "pi",
      answerAttempts: 0,
      currentUser: "x",
      answerCorrect: "",
      previousAttempts: this.props.previousAttempts,
      rerender: false,
      currUser: ""

    }
    this.handleAttempt=this.handleAttempt.bind(this);
  }

  componentDidMount(){
      //getQuestionFromDB?
      let course = this.props.course;
      let chapter = this.props.chapter;
      let question = this.props.onQuestion+""

      firebase.auth().onAuthStateChanged(user =>{
        users.doc(user.uid).collection(course).doc(chapter).collection(question).doc("data").get().then(doc=>{
          this.setState({previousAttempts: doc.data().attempts})
          if(doc.data().questionCompleted){
            this.setState({
              rerender: !this.state.rerender,
            })
            document.getElementById(this.props.onQuestion).style.backgroundColor ="teal";


          }
          this.setState({
            currUser: user.uid
          })
        })
      })
      
      
  }




  handleAttempt(event){

    let ans = document.getElementById("answer-field").value;
    // alert(ans);
    db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").get().then(doc=>{
      if((doc.data().answer+"") === ans){
        users.doc(this.state.currUser).collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("data").update({
          questionCompleted: true
        })
        this.setState({
            answerCorrect: "Answer has bee completed."
        })
        document.getElementById(this.props.onQuestion).style.backgroundColor ="teal";
      }else{
        users.doc(this.state.currUser).collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("data").update({
         attempts: this.state.previousAttempts+1
       })
       this.setState({answerAttempts: this.state.answerAttempts+1})
      }
    })
  }



  render() {
    // alert(this.state.currUser);

    return (

      <section className="QuestionDisplay flex-border-column">

          On Question {this.props.onQuestion}<br />

          Course: {this.props.course} <br/>
          Chapter: {this.props.chapter}

          <br/>

          Answer: <input id="answer-field" type="text" />
          <button onClick={this.handleAttempt}> Submit</button>

          <br/>
          <br/>
          {/* {this.state.answerCorrect} */}

      </section>
    );
  }
}

export default QuestionDisplay;
