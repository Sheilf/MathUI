import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './School.css';
import Classroom from '../Classroom/Classroom';



//This component is ok
class School extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <section className="School flex-border-row-wrap">
          <Classroom classroom="Fundamentals" name="Fundamentals" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1552285667/Asset_1_k2q5pt.png"/>
          <Classroom classroom="Arithmetic"  name="Arithmetic" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1551654799/LogoMakr_60EO38_hpewbj.png"/>
          <Classroom classroom="Prealgebra" name="Pre-algebra" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/e_bgremoval/v1551386475/PRE-ALGEBRA_jyyce4.png"/>

          <Classroom classroom="AlgebraI" name="Algebra I" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1551653270/LogoMakr_0aq7MX_vycqlj.png"/>
          <Classroom classroom="Geometry" name="Geometry" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/e_bgremoval/v1551386475/GEOMETRY_vstkwa.png"/>
          <Classroom classroom="AlgebraII" name="Algebra II" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1551653576/LogoMakr_9ytlmH_utvfsy.png"/>

          <Classroom classroom="Trigonometry" name="Trigonometry" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1551653731/LogoMakr_59s4Ob_zvy7cl.png"/>
          <Classroom classroom="Precalculus" name="Precalculus" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1551653864/LogoMakr_4cWzBk_p2yunc.png "/>
          <Classroom classroom="Statistics" name="Probability & Statistics" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1551654502/LogoMakr_1yyLhg_zl96av.png"/>


          <Classroom classroom="DifferentialCalculus" name="Differential Calculus" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/e_bgremoval/v1551386475/DIFFERENTIAL_CALCULUS_fczgpw.png"/>
          <Classroom classroom="IntegralCalculus" name="Integral Calculus" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/e_bgremoval/v1551386475/INTEGRAL_CALCULUS_dazpg0.png"/>
          <Classroom classroom="MultivariableCalculus" name="Multivariable Calculus" imgSrc="https://res.cloudinary.com/eduprojectsil/image/upload/v1551654428/LogoMakr_4I710Z_nlmuvy.png"/>
      </section>
    );
  }
}



export default School;