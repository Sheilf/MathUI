import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Banner.css'

class Banner extends Component {
  constructor(props){
    super(props);
    this.state={
    }


  }
  
  componentDidMount(){

  }
  render() {    
    return (
      <section id={this.props.banner} className="Banner flex-border-column-centered">
        <div>{this.props.heading} </div>
        <div>{this.props.subheading} </div>
      
      </section>
    );
  }
}


export default Banner;