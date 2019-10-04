import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Button.css';



class Button extends Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
      <section id={this.props.button} className="Button flex-border-column-centered">
          {this.props.button}

      </section>
    );
  }
}



export default Button;
