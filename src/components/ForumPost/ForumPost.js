import React, { Component } from 'react';
import './ForumPost.css';
import '../../styles/flexborder.css';
import '../../firebase-init';
import * as firebase from 'firebase';

let db = firebase.firestore();
let auth = firebase.auth();
class ForumPost extends Component {
    //to do
    //set props -> ForumPost
    //
    // course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion}
  constructor(props){
    super(props);
    this.state={
        posted: false,
        user: "",
        
    }

    // this.confirmPost = this.confirmPost.bind(this);
  }

  componentDidMount(){
    let title = document.getElementById("title").value;
    auth.onAuthStateChanged(user =>{
      if(user){
        // console.log("logged in")
        // console.log(user.uid)
        // alert(this.props.course)
        db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").collection("Forum Posts").get().then(querySnapshot => {
          
        })
        
        this.setState({user: user.uid})
      }else{
        alert("user not logged in. . . ")
      }
    })
  }
  // confirmPost(event){
  //   let title = document.getElementById("title").value;
  //   let op = document.getElementById("OriginalPost").value;

  //   db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").collection("Forum Posts").add({
  //     title: title,
  //     op: op
  //   })
    
  // }
  render() {

    return (
      <section id="ForumPost" className="ForumPost flex-border-column-centered">
        <input id="title" placeholder="Your Question" />
        <textarea id="OriginalPost" placeholder="Post details about your question." />
        <button onClick={this.props.confirmPost}>Post</button>



      </section>
    );
  }
}

export default ForumPost;


