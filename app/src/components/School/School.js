import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './School.css';
import Navigate from '../Navigate/Navigate';
import Classroom from '../Classroom/Classroom';

import {mathClassrooms, compsciClassrooms, defaultClassrooms} from '../../constants/courses';
/*
  map [
    {display_name="", school: "" classroom: "", imgSrc: ""},
    ...

  ]
*/


//This component is ok
class School extends Component {
  constructor(props){
    super(props);
    this.state={
      school: this.props.match.params.school,
      school_set: []
    

    }
  }
  componentDidMount(){
    //this.props.match.params

    if(this.state.school === "compsciUI"){
      this.setState({
        school_set: compsciClassrooms,
      
      })
    }else if(this.state.school==="mathUI"){
      this.setState({
        school_set: mathClassrooms
      })
    
    }else{
      this.setState({
        school_set: defaultClassrooms
      })
    }
  }

  componentWillUnmount(){
    console.log("SCHOOL IS UNNMOUNTING....")
  }
  render() {

    let classrooms = this.state.school_set.map(classroom => <Classroom school={this.state.school} display_name={classroom.display_name} classroom={classroom.classroom} imgSrc={classroom.imgSrc} />)
    return (
      

        <section className="School flex-border-row-centered-wrap">
          <Navigate />

          <div id="class-link-container" className="flex-border-row-wrap" >
            {classrooms}
          </div>
        </section>
      
    );
  }
}



export default School;



/*
          <Classroom classroom="Fundamentals" name="Fundamentals" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568091778/LogoMakr_3BzhmC_im2oqb.png"/>
          <Classroom classroom="Arithmetic"  name="Arithmetic" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568091779/LogoMakr_1vcpgk_bz4kiw.png"/>
          <Classroom classroom="Prealgebra" name="Pre-algebra" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568091778/LogoMakr_96rBA9_hcvtrc.png"/>

          <Classroom classroom="AlgebraI" name="Algebra I" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568091779/LogoMakr_2NExZf_lllswq.png"/>
          <Classroom classroom="Geometry" name="Geometry" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568091778/LogoMakr_1l5coe_obm9ev.png"/>
          <Classroom classroom="AlgebraII" name="Algebra II" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568091778/LogoMakr_4t7duu_opuiiq.png"/>

          <Classroom classroom="Trigonometry" name="Trigonometry" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568091778/LogoMakr_2wpkjD_zzygzv.png"/>
          <Classroom classroom="Precalculus" name="Precalculus" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568091778/LogoMakr_32bzXk_akhqxs.png "/>
          <Classroom classroom="Statistics" name="Probability & Statistics" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568092221/LogoMakr_7hLT0d_qge4ox.png"/>


          <Classroom classroom="DifferentialCalculus" name="Differential Calculus" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568092221/LogoMakr_838GX4_b6uwge.png"/>
          <Classroom classroom="IntegralCalculus" name="Integral Calculus" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568092220/LogoMakr_7F4VUm_kbodfp.png"/>
          <Classroom classroom="MultivariableCalculus" name="Multivariable Calculus" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1568092220/LogoMakr_1uRYs5_rcohsu.png"/>

*/