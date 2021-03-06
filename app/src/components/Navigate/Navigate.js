import React, { Component } from 'react';
import './Navigate.css';
import '../../styles/flexborder.css';
import {withRouter, Link, Redirect} from 'react-router-dom';
import '../../firebase-init';
import firebase from "firebase";


import '../../styles/global.css'

let db = firebase.firestore();
let users = db.collection("users");

class Navigate extends Component {
    //to do
    //set props -> GenericComponent
    //
    constructor(props){
        super(props);
        this.state={
            signedOut: false
        }
        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        firebase.auth().signOut();
        this.setState({signedOut: true})
        console.log("signing out")
    }
    render() {
        let little_bot; 
        little_bot = <img id="edu-menu" src="https://res.cloudinary.com/eduprojectsil/image/upload/v1553473588/LogoMakr_8mOTJR_gqzc6e.png"/>
        // little_bot = <img id="edu-menu" src="https://res.cloudinary.com/eduprojectsil/image/upload/v1553209818/LogoMakr_2xlYF8_pqm2tc.png" />
        // if(this.props.from){
          
        // }else{
          

        // }
        if(this.state.signedOut){
            return(
                <Redirect to="/" />
            )
        }
        return (
            <nav className="Navigate flex-border-row">
                <div id ="go-back-button" onClick={this.props.history.goBack} id="go-back-button"> <i className="fas fa-arrow-left"></i></div>
                <div>{little_bot}</div>
                <div id="menu">  
                    <ul>
                        <li>
                            <Link to="/stats"> My Stats </Link>
                        </li>
                        <li onClick = {this.signOut}>
                            Sign out

                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navigate);


