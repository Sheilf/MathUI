import React, { Component } from 'react';
import './Teacher.css';
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
  }

  render() {
    let display;
    if(this.props.display==="lectio"){
      display=<div>Written text and animations is active for {this.state.lectio}</div>

    }else if(this.props.display==="tabula"){
      display=(<div>
        Forum display for {this.state.tabula}
        </div>)

    }else if(this.props.display==="exempli"){
    display=(<div>
                <iframe width="560" height="315" src={this.state.exempli} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      (Video is displayed {this.state.exempli}</div>)

    }else{

    }
    return (
      <section className="Teacher">
        
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


