import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Banner.css'

class Banner extends Component {
  constructor(props){
    super(props);
    this.state={
      bannerContent: ""
    }


  }
  
  componentDidMount(){
    if(this.props.banner === "app-banner"){
      this.setState({
        bannerContent: "<span>MathUI</span><span>Connecting classrooms together.</span>"
      })
    }else if (this.props.banner === "session-banner"){
     this.setState({
        bannerContent:"<span> Choose a classrom </span>"
     });
    }
    


  }
  render() {
    let statecheck = this.state.bannerContent;
    
    if(statecheck.length > 0){
      document.getElementById(this.props.banner).innerHTML =statecheck;
    }

    
    return (
      <section id={this.props.banner} className="Banner flex-border-column-centered">

      </section>
    );
  }
}


export default Banner;