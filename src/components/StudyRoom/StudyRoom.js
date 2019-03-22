import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './StudyRoom.css';
import QuestionGenerator from '../QuestionGenerator/QuestionGenerator';
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay';
import Assistant from '../Assistant/Assistant';
import Navigate from '../Navigate/Navigate';

import { withRouter } from 'react-router-dom';

import '../../firebase-init';
import * as firebase from 'firebase';
import { throws } from 'assert';
let db = firebase.firestore();
let users = db.collection("users");


//Database storage
/*
Examine whether or not some functions will fall apart if some collections and documents were to be removed.
Chopping block: courseDB -> "questionData",  userDB -> "data"

*/

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
  }
  handleQuestionChange(event){

    //event.target.id = Some number [1..10]
    //database path convention: (collection)/doc/(collection)/doc...


    //Question gets visited.
    // (users)/user/(course)/chapter/(question#)/data
    //    .update()
    if(event.target.id.length > 0){
      users.doc(this.state.user).collection(this.props.match.params.classroom).doc(this.props.match.params.topic).collection(event.target.id).doc("data").update({
        visited: true
      })
  
      let item = document.getElementById(event.target.id);
        
        // Color the question node for visited(gold) or answer(teal)
        // (users)/user/(course)/chapter/(question#)/
        //  .get().then()
        //THIS IS REPEATED. SET A VARIABLE FOR THIS CHAIN
      users.doc(this.state.user).collection(this.props.match.params.classroom).doc(this.props.match.params.topic).collection(event.target.id).doc("data").get().then(doc=>{
        if(doc.data().questionCompleted == false){
          item.style.backgroundColor = "#FFF700";
        }else{
          item.style.backgroundColor ="#00FFFF";
  
        }
      })
  
      if(!(event.target.id === this.state.onQuestion))
        event.target.style.border = "2px solid #FFB158";
        document.getElementById(this.state.onQuestion).style.border= "1px solid black";  
        this.setState({
  
          onQuestion: event.target.id,
          questionIsClicked: !this.state.questionIsClicked,
          turnOffAssistant: false
        
        })
        
    }
  

    
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
        <Navigate />

        <div id="question-number-container" onClick={this.handleQuestionChange}>
        <QuestionGenerator course={this.state.course} chapter={this.state.chapter} studyroom={this.state.studyroom} onQuestion={this.state.onQuestion} questionSet={[1,2,3,4,5,6,7,8,9,10]}/>
        </div>
      
        <QuestionDisplay course={this.state.course} chapter={this.state.chapter} studyroom={this.state.studyroom} onQuestion={this.state.onQuestion}/>

        <div id="assistant-click-container" onClick={this.turnOnAssistant}>
         <Assistant course={this.state.course} chapter={this.state.chapter} studyroom={this.state.studyroom} onQuestion={this.state.onQuestion} displayState={this.state.turnOffAssistant}/>

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