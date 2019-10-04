import React, { Component } from 'react';
import './TabulaFora.css';
import '../../styles/flexborder.css';
import ForumPost from '../ForumPost/ForumPost';
import { database } from '../../../node_modules/firebase';
import ForumThread from '../ForumThread/ForumThread'
// import Forum from '../Forum/Forum'
import '../../firebase-init';
import * as firebase from 'firebase';

let db = firebase.firestore();
let auth = firebase.auth();


class TabulaFora extends Component {
    //to do
    //set props -> TabulaFora
    //
  constructor(props){
    // course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion}
    super(props);
    this.state={
      creatingPost: false,
      generatePost: 0,
      posts: [],
      currUser: ""
    }

    this.createPost = this.createPost.bind(this);
    this.confirmPost=this.confirmPost.bind(this);
  }
  componentDidMount(){
    // alert("button is clicked.")
    // alert("POSTING  UPDATED THE PARENT.")
    let mount_user = ""
    firebase.auth().onAuthStateChanged(user =>{
        mount_user = user.uid
    })
    let posts = []
    db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").collection("Forum Posts").onSnapshot(snapshot =>{
      let changes = snapshot.docChanges();
      // console.log(changes);
      changes.forEach(change =>{
        // console.log(change.doc.data())
        if(change.type=="added"){
          // alert("adding")
          // alert(change.doc.id)
         posts.push(
           {
             title: change.doc.data().title,
             id: change.doc.id,
          
           }
        )
        
        }
      })

      this.setState({
        posts: posts,
        currUser: mount_user
      })
   
    })
  
  }
  createPost(event){
    // alert(event)
    this.setState({
      creatingPost: true,
      generatePost: this.state.generatePost + 1
    })
  }

  confirmPost(event){
    let title = document.getElementById("title").value;
    let op = document.getElementById("OriginalPost").value;


    db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").collection("Forum Posts").add({
      title: title,
      op: op,
      posted_by_user: this.state.currUser
    })

    this.setState({
      generatePost: this.state.generatePost+1
    })

    // alert(this.state.generatePost)
    
  }

  
  render() {

    let threads = this.state.posts.map((thread)=>
      <ForumThread title={thread.title} course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion} id={thread.id} />
    )


    return (
      <section className="TabulaFora flex-border-column-centered">
        <button onClick={this.createPost}>Post a question</button>
        {this.state.creatingPost ? <ForumPost course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion} confirmPost={this.confirmPost}
 /> : null}

        <div>
            {threads}
        </div>
        {/* <Forum course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion} generatePost={this.state.generatePost}/> */}
      </section>
    );
  }
}

export default TabulaFora;


