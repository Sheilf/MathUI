import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Subject.css';
import TopicList from '../TopicList/TopicList';
import Navigate from '../Navigate/Navigate';
import { mathSubjects, compsciSubjects, defaultSubjects} from '../../constants/subjects';


//Generate list of topics using the front end instead of calling the database
//can be rewritte as a map
class Subject extends Component {
  constructor(props){
    super(props);
    this.state={
      topicList: [],
      classroom: this.props.match.params.classroom,
      mounted: false
    }

    this.loadPage=this.loadPage.bind(this);
  }

  componentDidMount(){
    if(this.props.match.params.school === 'mathUI'){
      this.setState({
        topicList: mathSubjects.get(this.props.match.params.classroom)
      })
    }else if(this.props.match.school === 'compsciUI') {
      this.setState({
        topicList: compsciSubjects.get(this.props.match.params.classroom)
      })

    }else{
      this.setState({
        topicList: defaultSubjects.get(this.props.match.params.classroom)
      })
    }


    
  }

  loadPage(event){
    this.setState({
      mounted: true
    })
    document.getElementById('subject').style.visibility = 'visible';

    document.getElementById('subject').style.opacity = 1;

  }

  render() {   
    console.log("TOPIC LIST: ", this.state.topicList)
    return (
      <section id="subject" className="Subject flex-border-column-centered" onLoad={this.loadPage}>
        <Navigate from="subject" />

        <h1>{this.state.classroom}</h1>
        <TopicList school={this.props.match.params.school} classroom={this.props.match.params.classroom} topics={this.state.topicList} />
      </section>
  );
  }
}



export default Subject;
