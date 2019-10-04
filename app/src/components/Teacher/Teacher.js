import React, { Component } from 'react';
import TabulaFora from '../TabulaFora/TabulaFora'
import './Teacher.css';
import Notes from '../Notes/Notes';
import '../../styles/flexborder.css';
import '../../firebase-init';
import * as firebase from 'firebase';
import { throws } from 'assert';


let db = firebase.firestore();
let users = db.collection("users");


class Teacher extends Component {
    //to do
    //set props -> Teacher
    //
    
    /*
    course={this.state.course}
     chapter={this.state.chapter} 
     studyroom={this.state.studyroom} onQuestion={this.state.onQuestion}*/

  constructor(props){
    super(props);
    this.state={
      lectio: "",
      tabula: "",
      exempli: ""

    }
  }
  componentDidMount(){

     db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").get().then(doc =>{
        this.setState({
          lectio: doc.data().reader,
          tabula: doc.data().forum,
          exempli: doc.data().videoURL
        })
    })


  }

  componentDidUpdate(){
    // alert("TEACHER has updated and rendered again.")
    
    let teacher = document.getElementById('teacher');
    if(this.props.display==="lectio"){
      teacher.style.backgroundColor="#FF9649"
    }else if(this.props.display==="tabula"){
      teacher.style.backgroundColor="palegreen"

      
    }else if(this.props.display==="exempli"){
      teacher.style.backgroundColor="darkblue"

    }
  }

  render() {
    let display;
    if(this.props.display==="lectio"){
      //component LectioVisum

      display= <Notes course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion} />

    }else if(this.props.display==="tabula"){
      //component TabulaFora
      display= <TabulaFora course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion} />
    

    }else if(this.props.display==="exempli"){
      //component ExempliExplicate
    display=(
                <iframe src={this.state.exempli} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

     )

    }else{

    }
    return (
      <section id="teacher" className="Teacher flex-border-column-centered">
        
        {display}

        <br/>
        {this.props.course}
        <br/>
        {this.props.chapter}
        <br />
        {"For question: "+this.props.onQuestion}
        

      </section>
    );
  }
}

export default Teacher;


