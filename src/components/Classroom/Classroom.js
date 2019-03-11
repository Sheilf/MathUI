import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Classroom.css';
import {Link} from 'react-router-dom';
import { DEFAULT_ECDH_CURVE } from 'tls';


class Classroom extends Component {

    constructor(props){
        super(props);
    }
  componentDidMount(){

    let classRoom = document.getElementById(this.props.classroom);
    //alert(classRoom);

    classRoom.style.backgroundImage = `url(${this.props.imgSrc})`;
    


  }
  render() {
    return (
      <div className="classroom-container">
      <Link to={"/session/"+this.props.classroom} className="" > 
      <h3 className="">{this.props.name}</h3>
       <section id={this.props.classroom} className="Classroom">
        
          {/* {this.props.name} */}
          {/* {this.props.imgSrc} */}
          {/* {this.props.classroom} */}
   
      
        
        </section>
      </Link>
      </div>
    );
  }
}



export default Classroom;
