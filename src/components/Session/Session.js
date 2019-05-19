import React, { Component } from 'react';
import './Session.css';
import {Redirect} from 'react-router-dom';
import '../../styles/flexborder.css';
import Banner from '../Banner/Banner';
import School from '../School/School';
import Navigate from '../Navigate/Navigate';

import '../../firebase-init';
import firebase from "firebase";

let db = firebase.firestore();
let USERS = db.collection("users");

class Session extends Component {
  constructor(props){
    super(props);
    this.state={
      mounted: false
    }

    this.loadPage=this.loadPage.bind(this);
  }

  loadPage(event){
    this.setState({
      mounted: true
    })
    document.getElementById("sesh").style.visibility="visible";
    document.getElementById("sesh").style.opacity="1";

  }

  componentDidMount(){



    firebase.auth().onAuthStateChanged(user => {  
      USERS.doc(user.uid).get().then(doc =>{
        if(doc.data().firstVisit == true){
          USERS.doc(user.uid).set({
            firstVisit: false,
            user_statistics:{
            attempts: 0,
            questions_completed: 0,
            questions_visited: 0,
            points_earned: 0,
            donations: 0
            }
          })
          let classrooms = ["Fundamentals", "Arithmetic", "Prealgebra", "AlgebraI", "Geometry", "AlgebraII", "Trigonometry", "Precalculus", "Statistics", "DifferentialCalculus", "IntegralCalculus", "MultivariableCalculus"];
          
          classrooms.forEach(i =>{
            let topicListCopy=[];
            switch(i){
              case 'Fundamentals':
                topicListCopy = ["Counting", "Addition&Subtraction", "PlaceValues", "Measurement", "Shapes"]
                break;
              case 'Arithmetic':    
                topicListCopy = ["Addition&Subtraction", "Multiplication&Division", "NegativeNumbers", "Fractions", "Decimals"]
                break;
              case 'Prealgebra':        
                topicListCopy = ["ArithmeticProperties", "Factors&Multiples", "ReadingData", "Measurement", "Fractions", "Decimals", "CoordinatePlane", "Ratiosrates&Proportions", "EquationsExpressions&Inequalities", "ExponentsRadicals&ScientificNotation"]
                break;
              case 'AlgebraI':        
                topicListCopy = ["AlgebraIFoundations", "SolvingEquations", "SolvingInequalities", "Units&Measurement", "LinearEquations&Graphs", "Functions", "LinearWordProblems", "Sequences", "SystemsofEquations", "InequalitiesinSystems&Graphs", "AbsoluteValue&PiecewiseFunctions", "RationalExponents&Radicals", "ExponentialGrowth&Decay", "Polynomials", "Factorization", "Quadratics", "IrrationalNumbers"];
                break;
              case 'Geometry':
                topicListCopy = ["GeometryFoundations", "Transformations", "Congruence", "Similiarity", "RightTriangles&Trigonometry", "SolidGeometry", "AnalyticalGeometry", "Circles"]
                break;
              case 'AlgebraII':         
                topicListCopy = ["Functions", "ComplexNumbers", "ArithmeticwithPolynomials", "Polynomials", "RadicalRelationships", "RationalRelationships", "ExponentialGrowth&Decay", "Exponentials&logarithms", "Trigonometry", "AdvancedEquations&Functions", "Series", "Modeling", "ConicSections"]
                break;
              case 'Trigonometry':
                topicListCopy = ["RightTriangles", "GeneralTriangles", "UnitCircle", "TrigonometricFunctions", "TrigonometricEquations&Identities"];
                break;
              case 'Precalculus':
                topicListCopy = ["TrigonometryFoundations", "ConicSections", "Vectors", "Matrices", "ComplexNumbers", "Probability&Combinatorics", "Series"];
                break;
              case 'Statistics':
                topicListCopy = ["AnalyzingCategoricalData", "Displaying&ComparingQuantitativeData", "SummarizingQuantitativeData", "ModelingDataDistributions", "ExploringBivariateNumericalData", "Design", "Probability", "CountingPermutations&Combinations", "RandomVariables", "SamplingDistributions", "ConfidenceIntervals", "Significance&HypothesisTesting", "Two-SampleInference", "InferenceforCategoricalData", "AdvancedRegression", "AnalysisofVariance"];
                break;
              case 'DifferentialCalculus':
                topicListCopy = ["Limits&Continuity", "DifferentiationBasics", "Derivatives", "ApplicationsofDerivatives"]
                break;
              case 'IntegralCalculus':
                topicListCopy = ["DerivativeFoundations", "Integration&Change", "ApplicationsofIntegration", "ParametricEquations", "PolarCoordinates", "VectorFunctions", "Series&Sequences"]
                break;
              case 'MultivariableCalculus':
                topicListCopy = ["CalculusFoundations", "Thinkingbeyond2D", "DerivativesinMultidimensions", "IntegratinginMultidimensions", "Convergence&Divergence", "Green&StokeTheorems"]
                break;
              default:
                alert("There was an error initiating your database");
            }
            topicListCopy.forEach(j =>{
              let questionCount = [1,2,3,4,5,6,7,8,9,10];
              questionCount.forEach(k =>{
                
                // let video_default = db.collection(i).doc(j).collection(k+"").doc("questionData");
                // video_default.update({
                //   videoURL: "https://www.youtube.com/embed/YkNmxJh_5WE"
                // })

                let QUESTION_MAP = USERS.doc(user.uid).collection(i).doc(j).collection(k+"").doc("data");
                
                QUESTION_MAP.set({
                  visited: false,
                  attempts: 0,
                  questionCompleted: false
                }) 
              
                //END .SET
                // let notecard = db.collection("Notecards").doc(i).collection(j).doc(k+"");
                // notecard.set({
                //   card: "created"
                // })
                // let video = db.collection("Videos").doc(i).collection(j).doc(k+"");
                // video.set({
                //   video: "created"
                // })
              //   let questions = db.collection("Questions").doc(i).collection(j).doc(k+"");
              //   questions.set({
              //     questions: "created"

              //   })

              //  let keyboards = db.collection("Keyboards").doc(i).collection(j).doc(k+"");
              //  keyboards.set({
              //    keyboard: "created"
              //  })




              })//END FOR EACH IN K
            })//END FOR EACH IN J
          })//END FOR EACH IN I
        }else{
          // let words = " hello world!  ";
          // console.log(words);

          // let word_split = words.split(" ");
          // let reverse_word_split = [];
          // let reversed_words = "";
          // console.log("split: "+ word_split);
          // for(let i = word_split.length - 1; i > -1; i--){
          //     if(word_split[i] === ""){
          //         console.log("space detected")
          //     }else{
          //      reverse_word_split.push(word_split[i]);  
      
          //     }
      
              
          // }
          
          //  console.log(reversed_words = reverse_word_split.join(" "))
        }
      })//end user.doc().get()
    })//end onAuthStateChanged()


  }//end componentDidMount()
  

  render() {

    return (
      <section id="sesh" className="Session flex-border-column-centered" onLoad={this.loadPage}>
        <Navigate />

        <Banner banner="session-banner" heading="" subheading="Choose a classroom." />
        <School />
      </section>
    );
  }
}

export default Session;
