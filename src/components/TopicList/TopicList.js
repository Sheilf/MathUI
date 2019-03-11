import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './TopicList.css';
import Topic from '../Topic/Topic';
import '../../firebase-init';
import * as firebase from 'firebase';

let db= firebase.firestore();
let users = db.collection("users");


class TopicList extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
      let classroom=this.props.classroom;



  }

  render() {
    const topics = this.props.topics;
        
    const topicItems = topics.map((topic)=>
        <Topic  chapterCount={this.props.topics.length} classroom={this.props.classroom} value={topic} routemap={topic.replace(/[.,\s]/g,'')} />
    );
    
    
    return (
       <div className="TopicList flex-border-row-centered-wrap"> {topicItems} </div>
    );
  }
}



export default TopicList;
