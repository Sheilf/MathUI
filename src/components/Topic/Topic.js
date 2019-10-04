import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Topic.css';
import {Link} from 'react-router-dom';
import '../../firebase-init';
import * as firebase from 'firebase';

class Topic extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){


  }

  
  render() {
    return (
        <Link id="Topic-link" to={"/session/"+this.props.classroom+"/"+this.props.routemap}>
          <div className="Topic flex-border-column-centered">{this.props.value}</div>
        </Link>
    );
  }
}


/*

*/
export default Topic;
