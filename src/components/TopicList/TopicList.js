import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './TopicList.css';
import Topic from '../Topic/Topic';


class TopicList extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
  }

  render() {
    const topics = this.props.topics; 
    const topicItems = topics.map((topic)=>
        <Topic chapterCount={this.props.topics.length} classroom={this.props.classroom} value={topic} routemap={topic.replace(/[.,\s]/g,'')} />
    );
    
    
    return (
       <div className="TopicList flex-border-row-wrap">
        {topicItems} </div>
    );
  }
}



export default TopicList;
