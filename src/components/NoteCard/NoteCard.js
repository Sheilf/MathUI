import React, { Component } from 'react';
import './NoteCard.css';
import '../../styles/flexborder.css';
import Sketch from '../Sketch/Sketch';
import '../../firebase-init';
import * as firebase from 'firebase';

let db = firebase.firestore();
let cards = db.collection("Notecards");



class NoteCard extends Component {
    //to do
    //set props -> NoteCard
    //

  constructor(props){
    super(props);
    this.state={
        rotation: 0,
        stop: 0,
  


    }
    this.tick=this.tick.bind(this);


  }

  
  componentDidMount(){
    requestAnimationFrame(this.tick)

  }

  
  componentWillUnmount(){
    cancelAnimationFrame(this.state.stop);
 }

  tick(){
    const rotation = this.state.rotation + 0.04;
    this.setState({
        rotation: rotation
    })
    requestAnimationFrame(this.tick);

  }


  render() {
    return (
      <section className="NoteCard flex-border-column-centered">
        <Sketch course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion} rotation={this.state.rotation} width={200} height={200} />
        <button>Collect Card</button>
      </section>
    );
  }
}

export default NoteCard;


