import React, { Component } from 'react';
import './Notes.css';
import '../../styles/flexborder.css';
import NoteCard from '../NoteCard/NoteCard';
import '../../firebase-init';
import * as firebase from 'firebase';

let db = firebase.firestore();
let auth = firebase.auth();

class Notes extends Component {
    constructor(props){
        super(props);
        this.state={
            cardIsOpen: false


        }
        this.openCard = this.openCard.bind(this);

    }


    componentDidMount(){
            // auth.currentUser.uid;
        alert(auth.currentUser.uid);
        let currUser  = auth.currentUser.uid;
        let NOTES = db.collection(this.props.course).doc(this.props.chapter).collection(this.props.onQuestion+"").doc("questionData").collection("Notes").doc("Notecards");

        NOTES.set({
            notecards: {

            },
            notecard_count: 0 
        })
    }


    openCard(event){
        // alert("note is clicked");

        this.setState({
            cardIsOpen: true
        })
    }
    render() {
  
        return (
                // <Sketch rotation={this.state.rotation} width={200} height={200} />
            <section className="Notes">  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis tempor erat, quis faucibus eros. Mauris dapibus, dui id semper ornare, mauris lectus porttitor dolor, sed luctus tortor justo ac lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec luctus dignissim ante, vitae vehicula sapien ornare quis. Donec consequat velit vestibulum purus tincidunt porta. Pellentesque id turpis placerat, rutrum leo quis, egestas enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt velit ut leo feugiat, nec cursus nisi fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rhoncus fermentum nibh in consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc leo justo, pulvinar sed tellus vitae, ullamcorper finibus lectus. Nullam id quam nec tellus pellentesque scelerisque.


<div id="card-drop" className="flex-border-column-centered" onClick={this.openCard}> Proin tincidunt sit amet dolor rhoncus lacinia. Cras sit amet dolor felis. Maecenas tempus, tortor vitae posuere feugiat, leo sem gravida justo, eget gravida nisl ligula consequat ligula. Sed id ornare augue. Fusce sodales dolor nec velit hendrerit lacinia. Etiam convallis lobortis neque, nec fringilla sapien lobortis ac. Praesent bibendum rhoncus ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget urna in tortor cursus condimentum. Quisque leo ex, viverra eget odio vitae, dictum facilisis mi. Phasellus porta, nulla sagittis pretium rhoncus, arcu ante egestas elit, vitae congue neque odio laoreet augue. 

{this.state.cardIsOpen ? <NoteCard course={this.props.course} chapter={this.props.chapter} onQuestion={this.props.onQuestion}/> : null}
</div>

           

               


Integer quis velit suscipit, eleifend arcu eget, egestas magna. Proin tempor, nunc et congue efficitur, velit odio consequat dolor, at dictum purus sem in leo. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse pellentesque mollis tellus ac sollicitudin. Mauris condimentum sollicitudin metus, eu iaculis eros mollis sit amet. Nullam commodo turpis mi, eget porta eros sodales vitae. Curabitur convallis ligula quis fringilla suscipit. Etiam luctus rhoncus ante, ac congue est euismod id. Maecenas ac vehicula enim, eget posuere dolor. Aenean metus quam, vehicula sed turpis quis, condimentum laoreet enim.

Aenean vitae convallis ligula. Sed vel urna magna. Nunc dignissim at odio a pharetra. Vivamus sit amet libero varius, tristique dui eu, lacinia dui. Etiam rhoncus interdum ipsum quis cursus. Donec a libero metus. Vivamus porttitor scelerisque sapien, a cursus dui pellentesque eget.

Fusce elementum, leo quis fermentum hendrerit, eros risus dapibus diam, ut molestie nulla ipsum pretium odio. Nunc iaculis eros at ultrices efficitur. Fusce facilisis elit ipsum, at convallis mauris rutrum in. Etiam leo quam, bibendum quis rutrum mattis, auctor nec quam. Integer eros nibh, commodo sit amet malesuada ut, malesuada sed lorem. Cras diam leo, sagittis id est nec, sollicitudin tincidunt tortor. Pellentesque sed imperdiet augue. Vivamus vel tellus pulvinar, aliquam turpis in, laoreet nisi. Quisque sapien magna, consequat ac elit at, dictum auctor velit. Aenean quam dolor, dapibus in arcu nec, porttitor faucibus sem. Aliquam porta blandit lacinia.
            </section>
        );
    }
}

export default Notes;


