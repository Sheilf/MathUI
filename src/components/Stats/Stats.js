import React, { Component } from 'react';
import './Stats.css';
import '../../styles/flexborder.css';
import Navigate from '../Navigate/Navigate';
import '../../firebase-init';
import firebase from "firebase";


let db = firebase.firestore();
let users = db.collection("users");
class Stats extends Component {
    //to do
    //set props -> Stats
    //
  constructor(props){

    super(props);
    this.state={
      username: ""
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user =>{
        this.setState({
          username: user.displayName

        })
    })
  }
  render() {
    return (
      <section className="Stats flex-border-column-centered">
        <Navigate />
        <header> <h3>Account Stats</h3> 

          <h2>{this.state.username}</h2>
        </header>

        <section id="coin-bag">
          Coin Bag
        </section>
      </section>
    );
  }
}

export default Stats;


