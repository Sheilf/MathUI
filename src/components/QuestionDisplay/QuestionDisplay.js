import React, { Component } from 'react';
import './QuestionDisplay.css';
import '../../styles/flexborder.css';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';
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
            document.getElementById(this.props.onQuestion).style.backgroundColor ="#00FFFF";


          }
          this.setState({
            currUser: user.uid
          })
        })
      })
      
      
  }




  handleAttempt(event){

    //if already answered: Do nothing
    //else: run attempt and add to it.
  
    
    let ans = document.getElementById("answer-field").value;
    
    users.doc(this.state.currUser).collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("data").get().then(doc=>{
      // alert(doc.data());
      if(doc.data().questionCompleted){
        //do nothing
        alert("question has been completed.");
      }else{
        alert("Question has NOT een completed.")
       
         db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").get().then(snap =>{
            if(snap.data().answer+""===ans){
              alert("CORRECT");
              users.doc(this.state.currUser).collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("data").update({
                questionCompleted: true
              })
            }else{
              alert("wrong");
            }

            users.doc(this.state.currUser).get().then(dataset=>{
                users.doc(this.state.currUser).update({
                  "user_statistics.attempts": dataset.data().user_statistics.attempts+1
                  })
            })
            
            
         })
      }
    })


    db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").get().then(doc=>{
      if(doc.data())
      if((doc.data().answer+"") === ans){
        alert('correct');
        users.doc(this.state.currUser).collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("data").update({
          questionCompleted: true
        })
        this.setState({
            answerCorrect: "Answer has bee completed."
        })
        document.getElementById(this.props.onQuestion).style.backgroundColor = "#5CF145";  
      }else{
          //warn user answer was not completed.
          alert('wrong.')
      }
    })
  }



  render() {
    // alert(this.state.currUser);

    return (

      <section className="QuestionDisplay flex-border-column">

          On Question {this.props.onQuestion}<br />


          Answer: <input id="answer-field" type="text" />

          <div id="qd-buttons">
          <button onClick={this.handleAttempt}> Submit</button>

          
          <button id="math-keyboard-button"><Link to="/keyboard" className="flex-border-column-centered"><img src="https://res.cloudinary.com/eduprojectsil/image/upload/v1552970075/LogoMakr_9elokG_tf1muc.png"/><span>MathKeys</span></Link></button>
          {/* {this.state.answerCorrect} */}
          </div>
      </section>
    );
  }
}

export default QuestionDisplay;
