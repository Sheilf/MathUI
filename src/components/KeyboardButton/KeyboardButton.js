import React, { Component } from 'react';
import './KeyboardButton.css';
import '../../styles/flexborder.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';


/*
writing out functionality & then generalizing it.

*/
class KeyboardButton extends Component {
    //to do
    //set props -> KeyboardButton
    //


  componentDidMount(){

  }


 
  render() {
    return (
      <button id={this.props.id} className="KeyboardButton flex-border-column-centered" onClick={this.props.clickEvent} onKeyDown={this.props.onKeyDown}>
              <InlineMath math={this.props.combination} />   
      </button>
      
    );
  }
}

export default KeyboardButton;


