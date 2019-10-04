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
      username: "",
      displayStats:""
    }
  }
  componentDidMount(){
    let classrooms = ["Fundamentals", "Arithmetic", "Prealgebra", "AlgebraI", "Geometry", "AlgebraII", "Trigonometry", "Precalculus", "Statistics", "DifferentialCalculus", "IntegralCalculus", "MultivariableCalculus"];

    let test;
    firebase.auth().onAuthStateChanged(user =>{
      /*
        usersDB getStats()
      */
      users.doc(user.uid).get().then(doc =>{
        let item = doc.data().user_statistics;
        test = Object.keys(item).map(key =>  <div className="stats-subcontainer">{key.charAt(0).toUpperCase()+key.replace(/_/g, ' ').slice(1)+": "+ item[key]}/n</div>)
      //   for(let i in item){
      //     console.log(item[keys[i]]); 
      //   }
      // })
      this.setState({
        username: user.displayName,
        displayStats: test
      })
    })
 


 
})
}
  render() {
    return (
      <section className="Stats flex-border-column-centered">
        <Navigate />
        <header> 
          <h3>Account Stats</h3> 
          <h2>{this.state.username}</h2>
        </header>

       <h1>Awards</h1>  
        <section id="Awards-container" className="flex-border-row-wrap">
         
          <div className="award-badges">
            Award 1

          </div>
          <div className="award-badges">
            Award 2
          </div>
          <div className="award-badges">
            Award 3
          </div>
          <div className="award-badges">
            Award 3
          </div>
          <div className="award-badges">
            Award 3
          </div>
        </section>
        <h1>Points</h1>  
        <section id="Points-container" className="flex-border-column-centered">
          <b>0/n points </b>               
        </section>
        <h1>Statistics</h1>
        <section id="user-statistics-container" className="flex-border-column-centered">
         
          {this.state.displayStats}
        </section>
        
      </section>
    );
  }
}

export default Stats;


