import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './StudyRoom.css';
import QuestionGenerator from '../QuestionGenerator/QuestionGenerator';
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay';
import Assistant from '../Assistant/Assistant';
import '../../firebase-init';
import * as firebase from 'firebase';
import { throws } from 'assert';
let db = firebase.firestore();
let users = db.collection("users");



/*
You need to pass props and render props.children to propagate the nested components
This is called "Containment", similar to OOP's "Encapsulation"
*/


//Todo: evaluate StudyRoom and set correct flex-border className/style.
class StudyRoom extends Component {
  constructor(props){
    super(props);
    this.state={
      course: this.props.match.params.classroom,
      chapter: this.props.match.params.topic,
      studyroom: [this.props.match.params.classroom, this.props.match.params.topic], //[classroom, chapter]
      onQuestion: 1,
      user: "",
      questionIsClicked: false,
      prevAttempts: 0,
      turnOffAssistant: false
    }

    this.handleQuestionChange=this.handleQuestionChange.bind(this);
    this.turnOnAssistant = this.turnOnAssistant.bind(this);
    
  }
  componentDidMount(){

      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          this.setState({user: user.uid})
          
        }
      })
  }

  componentDidUpdate(){
    // alert("STUDYROOM has updated and rendered again.")
  }
  handleQuestionChange(event){
      // alert(event.target.id);
      users.doc(
        this.state.user
      ).collection(
        this.props.match.params.classroom
      ).doc(
        this.props.match.params.topic
      ).collection(
        event.target.id
      ).doc(
        "data"
      ).update({
        visited: true
      })
      let item = document.getElementById(event.target.id);
      
      users.doc(
        this.state.user
      ).collection(
        this.props.match.params.classroom
      ).doc(
        this.props.match.params.topic
      ).collection(
        event.target.id
      ).doc(
        "data"
      ).get().then(doc=>{
          if(doc.data().questionCompleted == false){
            // alert("question hasnt been completed...")
            item.style.backgroundColor = "gold";
            this.setState({prevAttempts: doc.data().attempts})
          }else{
            item.style.backgroundColor ="teal";

          }
      })


      this.setState({
        onQuestion: event.target.id,
        questionIsClicked: !this.state.questionIsClicked,
        turnOffAssistant: false
      
      })

      
  }

  turnOnAssistant(event){
      this.setState({
        turnOffAssistant: true
      })
      // alert(event.target.id);

  }


  render() {
    return (
      <section className="StudyRoom flex-border-row-wrap">
        <div id="question-number-container" onClick={this.handleQuestionChange}>
        <QuestionGenerator course={this.state.course} chapter={this.state.chapter} studyroom={this.state.studyroom} onQuestion={this.state.onQuestion} questionSet={[1,2,3,4,5,6,7,8,9,10]}/>
        </div>
      
        <QuestionDisplay course={this.state.course} chapter={this.state.chapter} studyroom={this.state.studyroom} onQuestion={this.state.onQuestion}/>

        <div id="assistant-click-container" onClick={this.turnOnAssistant}>
         <Assistant course={this.state.course} chapter={this.state.chapter} studyroom={this.state.studyroom} onQuestion={this.state.onQuestion} displayState={this.state.turnOffAssistant}/>} 

        </div>
      </section>
    );
  }
}

export default StudyRoom;



/*
StudyRoom
  QuestionNav -> Contains 1..10, gets classroom/topic data, determines output...
  So StudyRoom is the set of questions that renders everything.
  
  The most important parameter is thus the classroom and topic data.
  So there has to be a way to order all the
  
  Classrooms
    Topics


  Lets see what props params are being passed...
  the Link from Subject to StudyRoom doesn't pass anything
  Perhaps theres a way to get the string from the Route Params values. 
  Let's check Stack OverFlow





*/