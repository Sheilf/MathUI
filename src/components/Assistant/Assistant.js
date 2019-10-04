import React, { Component } from 'react';
import './Assistant.css';
import Lectio from '../Lectio/Lectio';
import Tabula from '../Tabula/Tabula';
import Exempli from '../Exempli/Exempli';
import Teacher from '../Teacher/Teacher';
import '../../styles/flexborder.css';

class Assistant extends Component {
    //to do
    //set props -> Assistant
    //
    
    /*
    course={this.state.course}
     chapter={this.state.chapter} 
     studyroom={this.state.studyroom} onQuestion={this.state.onQuestion}*/

  constructor(props){
    super(props);
    this.state={
      isLectioActive: false,
      isTabulaActive: false,
      isExempliActve: false,


    }
    this.handleAssistant = this.handleAssistant.bind(this);
  }

  componentDidMount(){


  }

  componentDidUpdate(){
    // alert("ASSISTANT has updated and rendered again.")
  }
  handleAssistant(event){
    var teacher = document.getElementById("TeacherContainer");
    if(event.target.id==="Lectio"){
      this.setState({
        isLectioActive: true,
        isTabulaActive: false,
        isExempliActve: false

      })
      // teacher.style.backgroundColor="gold"
    }else if(event.target.id==="Tabula"){
      this.setState({
        isLectioActive: false,
        isTabulaActive: true,
        isExempliActve: false

      })
      // teacher.style.backgroundColor="palegreen";
    }else if(event.target.id==="Exempli"){
      this.setState({
        isLectioActive: false,
        isTabulaActive: false,
        isExempliActve: true

      })
      // teacher.style.backgroundColor="darkblue";
    }else{

    }


    
      
  }
  render() {
    let teacher;
    if(this.state.isLectioActive){
      teacher = <Teacher display="lectio" course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion} />
    }else if(this.state.isTabulaActive){
      teacher = <Teacher display="tabula"  course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion}/>

    }else if(this.state.isExempliActve){
      teacher = <Teacher display="exempli" course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion}/>

    }else{
      teacher = null
    }

    return (
      <section className="AssistantContainer flex-border-column">
        <section className="Assistant flex-border-row" onClick={this.handleAssistant}>
          <Lectio />
          <Tabula />
          <Exempli />
        </section>

        <section id="TeacherContainer" className="TeacherContainer flex-border-row-column-centered">
          {this.props.displayState ? teacher : null}
        </section> 


      </section>
    );
  }
}

export default Assistant;


