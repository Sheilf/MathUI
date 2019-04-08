import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Classroom.css';
import {Link} from 'react-router-dom';
import { DEFAULT_ECDH_CURVE } from 'tls';

//Classroom components are links to their respective chapters using component Subject
class Classroom extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    document.getElementById(this.props.classroom).style.backgroundImage = `url(${this.props.imgSrc})`;
    
  }
  render() {
    return (
      <Link to={"/session/"+this.props.classroom} className="classroom-container">  
      
        
          <h3 className="">{this.props.name}</h3>
          <section id={this.props.classroom} className="Classroom">

          </section>
     
     
      </Link>
    );
  }
}



export default Classroom;
