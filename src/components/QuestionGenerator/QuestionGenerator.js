import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './QuestionGenerator.css';
import Question from '../Question/Question';
import '../../firebase-init';
import * as firebase from 'firebase';
let db = firebase.firestore();


class QuestionGenerator extends Component {
  constructor(props){
    super(props);
    this.state={


    }
    
  }
  componentDidMount(){




      
  }

  render() {
    let questionList = this.props.questionSet;

    let questionItems = questionList.map((questionNumber)=>
      <Question questionCount={questionNumber} course={this.props.course} chapter={this.props.chapter} />
    );
  

    return (
      <section className="QuestionGenerator flex-border-row">
        {questionItems}
      </section>
    );
  }
}

export default QuestionGenerator;


