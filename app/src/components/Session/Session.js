import React, { Component } from 'react';
import './Session.css';
import {Redirect} from 'react-router-dom';
import '../../styles/flexborder.css';
import Banner from '../Banner/Banner';
import School from '../School/School';
import Navigate from '../Navigate/Navigate';
import {Link} from 'react-router-dom';

import '../../firebase-init';
import firebase from "firebase";

let db = firebase.firestore();
let USERS = db.collection("users");

class Session extends Component{
  constructor(props){
    super(props);
    this.state={
      mounted: false,
      school_selected: ""
    }

    this.loadPage=this.loadPage.bind(this);
    this.chooseSchool = this.chooseSchool.bind(this);
  }

  chooseSchool(event){
    if(event.target.className !== 'schooltype'){}
    else{
      alert("called")
      this.setState({
        school_selected: event.target.id
      })
    }
  }
  loadPage(event){
    console.log("LOADED SESSIon")
    this.setState({
      mounted: true
    })
    document.getElementById("sesh").style.visibility="visible";
    document.getElementById("sesh").style.opacity="1";

  }

  componentDidMount(){

    console.log("SESSION MOUNTED...")

    firebase.auth().onAuthStateChanged(user => {  
      USERS.doc(user.uid).get().then(doc =>{
        if(doc.data()){
          USERS.doc(user.uid).update({
            firstVisit: false
          })
        }else{
          USERS.doc(user.uid).set({
            firstVisit: true,
            user_statistics: {
              attempts: 0,
              questions_completed: 0,
              questions_visited: 0,
              points_earned: 0,
              donations: 0
              }
            })

          }
        })
      
      //      
    //end onAuthStateChanged()
      })
    
  }//end componentDidMount()
  

  render() {

    return (
      <section id="sesh" className="Session flex-border-column-centered" onLoad={this.loadPage} onClick={this.chooseSchool}>
        <Navigate />

        <Banner banner="session-banner" heading="" subheading="Choose a school." />



        <div className="schooltype-container flex-border-row-centered-wrap">
          <Link to="/session/mathUI" className="schooltype" id="mathUI">
             <h1> mathUI</h1>
          </Link>

          <Link to="/session/compsciUI" className="schooltype" id="compsciUI">
            <h1>compsciUI</h1>
          </Link>

          <Link to="/session/default" className="schooltype" id="defaultUI">
            <h1>defaultUI</h1>
          </Link>
        </div>
      
      </section>
    );
  }
}

export default Session;


//     <School />


/*
 classrooms.forEach(i =>{
      //         let topicListCopy=[];
      //         switch(i){
      //           case 'Fundamentals':
      //             topicListCopy = ["Counting", "Addition&Subtraction", "PlaceValues", "Measurement", "Shapes"]
      //             break;
      //           case 'Arithmetic':    
      //             topicListCopy = ["Addition&Subtraction", "Multiplication&Division", "NegativeNumbers", "Fractions", "Decimals"]
      //             break;
      //           case 'Prealgebra':        
      //             topicListCopy = ["ArithmeticProperties", "Factors&Multiples", "ReadingData", "Measurement", "Fractions", "Decimals", "CoordinatePlane", "Ratiosrates&Proportions", "EquationsExpressions&Inequalities", "ExponentsRadicals&ScientificNotation"]
      //             break;
      //           case 'AlgebraI':        
      //             topicListCopy = ["AlgebraIFoundations", "SolvingEquations", "SolvingInequalities", "Units&Measurement", "LinearEquations&Graphs", "Functions", "LinearWordProblems", "Sequences", "SystemsofEquations", "InequalitiesinSystems&Graphs", "AbsoluteValue&PiecewiseFunctions", "RationalExponents&Radicals", "ExponentialGrowth&Decay", "Polynomials", "Factorization", "Quadratics", "IrrationalNumbers"];
      //             break;
      //           case 'Geometry':
      //             topicListCopy = ["GeometryFoundations", "Transformations", "Congruence", "Similiarity", "RightTriangles&Trigonometry", "SolidGeometry", "AnalyticalGeometry", "Circles"]
      //             break;
      //           case 'AlgebraII':         
      //             topicListCopy = ["Functions", "ComplexNumbers", "ArithmeticwithPolynomials", "Polynomials", "RadicalRelationships", "RationalRelationships", "ExponentialGrowth&Decay", "Exponentials&logarithms", "Trigonometry", "AdvancedEquations&Functions", "Series", "Modeling", "ConicSections"]
      //             break;
      //           case 'Trigonometry':
      //             topicListCopy = ["RightTriangles", "GeneralTriangles", "UnitCircle", "TrigonometricFunctions", "TrigonometricEquations&Identities"];
      //             break;
      //           case 'Precalculus':
      //             topicListCopy = ["TrigonometryFoundations", "ConicSections", "Vectors", "Matrices", "ComplexNumbers", "Probability&Combinatorics", "Series"];
      //             break;
      //           case 'Statistics':
      //             topicListCopy = ["AnalyzingCategoricalData", "Displaying&ComparingQuantitativeData", "SummarizingQuantitativeData", "ModelingDataDistributions", "ExploringBivariateNumericalData", "Design", "Probability", "CountingPermutations&Combinations", "RandomVariables", "SamplingDistributions", "ConfidenceIntervals", "Significance&HypothesisTesting", "Two-SampleInference", "InferenceforCategoricalData", "AdvancedRegression", "AnalysisofVariance"];
      //             break;
      //           case 'DifferentialCalculus':
      //             topicListCopy = ["Limits&Continuity", "DifferentiationBasics", "Derivatives", "ApplicationsofDerivatives"]
      //             break;
      //           case 'IntegralCalculus':
      //             topicListCopy = ["DerivativeFoundations", "Integration&Change", "ApplicationsofIntegration", "ParametricEquations", "PolarCoordinates", "VectorFunctions", "Series&Sequences"]
      //             break;
      //           case 'MultivariableCalculus':
      //             topicListCopy = ["CalculusFoundations", "Thinkingbeyond2D", "DerivativesinMultidimensions", "IntegratinginMultidimensions", "Convergence&Divergence", "Green&StokeTheorems"]
      //             break;
      //           default:
      //             alert("There was an error initiating your database");
      //         }
      //         topicListCopy.forEach(j =>{
      //           let questionCount = [1,2,3,4,5,6,7,8,9,10];
      //           questionCount.forEach(k =>{
                  
      //             // let video_default = db.collection(i).doc(j).collection(k+"").doc("questionData");
      //             // video_default.update({
      //             //   videoURL: "https://www.youtube.com/embed/YkNmxJh_5WE"
      //             // })
  
      //             let QUESTION_MAP = USERS.doc(user.uid).collection(i).doc(j).collection(k+"").doc("data");
                  
      //             QUESTION_MAP.set({
      //               visited: false,
      //               attempts: 0,
      //               questionCompleted: false
      //             }) 
                
           
  
  
  
      //           })//END FOR EACH IN K
      //         })//END FOR EACH IN J
      //       })//END FOR EACH IN I
          
      //       console.log("DONE....")
              
        
      //   }
            
       })//end user.doc().get()

      // })

*/