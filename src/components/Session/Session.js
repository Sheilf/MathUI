import React, { Component } from 'react';
import './Session.css';
import {Redirect} from 'react-router-dom';
import '../../styles/flexborder.css';
import Banner from '../Banner/Banner';
import School from '../School/School';
import '../../firebase-init';
import firebase from "firebase";
let db = firebase.firestore();
let users = db.collection("users");

class Session extends Component {
  constructor(props){
    super(props);
    this.state={
      signedOut: false
    }
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount(){
 
    firebase.auth().onAuthStateChanged(user => {
          
        users.doc(user.uid).get().then(doc =>{
                if(doc.data().firstVisit == true){
                      //populate database
                      users.doc(user.uid).update({
                        firstVisit: false
                      })
                      alert("populating database for user");

                      let classrooms = ["Fundamentals", "Arithmetic", "Prealgebra", "AlgebraI", "Geometry", "AlgebraII", "Trigonometry", "Precalculus", "Statistics", "DifferentialCalculus", "IntegralCalculus", "MultivariableCalculus"];
                      classrooms.forEach(i =>{
                        let currentClassroom=""
                        let topicListCopy=[];

                        switch(i){
                          case 'Fundamentals':
                          currentClassroom="Fundamentals";
                          topicListCopy = ["Counting", "Addition&Subtraction", "PlaceValues", "Measurement", "Shapes"]
                          break;
                        case 'Arithmetic':
                          currentClassroom="Arithmetic";
                          topicListCopy = ["Addition&Subtraction", "Multiplication&Division", "NegativeNumbers", "Fractions", "Decimals"]
                          break;
                        case 'Prealgebra':
                          currentClassroom="Prealgebra";
                          topicListCopy = ["ArithmeticProperties", "Factors&Multiples", "ReadingData", "Measurement", "Fractions", "Decimals", "CoordinatePlane", "Ratiosrates&Proportions", "EquationsExpressions&Inequalities", "ExponentsRadicals&ScientificNotation"]
                          break;
                        case 'AlgebraI':
                          currentClassroom="AlgebraI";
                          topicListCopy = ["AlgebraIFoundations", "SolvingEquations", "SolvingInequalities", "Units&Measurement", "LinearEquations&Graphs", "Functions", "LinearWordProblems", "Sequences", "SystemsofEquations", "InequalitiesinSystems&Graphs", "AbsoluteValue&PiecewiseFunctions", "RationalExponents&Radicals", "ExponentialGrowth&Decay", "Polynomials", "Factorization", "Quadratics", "IrrationalNumbers"];
                          break;
                        case 'Geometry':
                          currentClassroom="Geometry";
                          topicListCopy = ["GeometryFoundations", "Transformations", "Congruence", "Similiarity", "RightTriangles&Trigonometry", "SolidGeometry", "AnalyticalGeometry", "Circles"]
                          break;
                        case 'AlgebraII':
                          currentClassroom="AlgebraII";
                          topicListCopy = ["Functions", "ComplexNumbers", "ArithmeticwithPolynomials", "Polynomials", "RadicalRelationships", "RationalRelationships", "ExponentialGrowth&Decay", "Exponentials&logarithms", "Trigonometry", "AdvancedEquations&Functions", "Series", "Modeling", "ConicSections"]
                          break;
                        case 'Trigonometry':
                          currentClassroom="Trigonmetry";
                          topicListCopy = ["RightTriangles", "GeneralTriangles", "UnitCircle", "TrigonometricFunctions", "TrigonometricEquations&Identities"];
                          break;
                        case 'Precalculus':
                          currentClassroom="Precalculus";  
                          topicListCopy = ["TrigonometryFoundations", "ConicSections", "Vectors", "Matrices", "ComplexNumbers", "Probability&Combinatorics", "Series"];
                          break;
                        case 'Statistics':
                          currentClassroom="Statistics";
                          topicListCopy = ["AnalyzingCategoricalData", "Displaying&ComparingQuantitativeData", "SummarizingQuantitativeData", "ModelingDataDistributions", "ExploringBivariateNumericalData", "Design", "Probability", "CountingPermutations&Combinations", "RandomVariables", "SamplingDistributions", "ConfidenceIntervals", "Significance&HypothesisTesting", "Two-SampleInference", "InferenceforCategoricalData", "AdvancedRegression", "AnalysisofVariance"];
                          break;
                        case 'DifferentialCalculus':
                          currentClassroom="DifferentialCalculus";
                          topicListCopy = ["Limits&Continuity", "DifferentiationBasics", "Derivatives", "ApplicationsofDerivatives"]
                          break;
                        case 'IntegralCalculus':
                          currentClassroom="IntegralCalculus";
                          topicListCopy = ["DerivativeFoundations", "Integration&Change", "ApplicationsofIntegration", "ParametricEquations", "PolarCoordinates", "VectorFunctions", "Series&Sequences"]
                          break;
                        case 'MultivariableCalculus':
                          currentClassroom="Multivariable Calculus";
                          topicListCopy = ["CalculusFoundations", "Thinkingbeyond2D", "DerivativesinMultidimensions", "IntegratinginMultidimensions", "Convergence&Divergence", "Green&StokeTheorems"]
                          break;
                        default:
                          alert( "I don't know such values" );
                        }//END SWITCH(I)
                        topicListCopy.forEach(j =>{
                            let questionCount = [1,2,3,4,5,6,7,8,9,10];
                            questionCount.forEach(k =>{
                              let dataItem = users.doc(user.uid).collection(i).doc(j).collection(k+"").doc("data");
                              dataItem.set({
                                visited: false,
                                attempts: 0,
                                questionCompleted: false
                              }) //END .SET

                            })//END FOR EACH IN K
                        })//END FOR EACH IN J
                      })//END FOR EACH IN I
                }else{
                  // alert("Database is already populated. DO Nothing")
                  console.log("Database has already been populated. Do nothing.")
     
                }
         })
        })


}
  signOut(){
    firebase.auth().onAuthStateChanged(function(){
      firebase.auth().signOut();
      window.location = "/";
    })
    this.setState({
      signedOut: true
    })
  }
  render() {
    return (
      <section className="Session flex-border-column-centered">
        {this.state.signedOut ? (<Redirect to="/"/>) : (null)}

        <button onClick = {this.signOut}>Sign out</button>
        <Banner banner="session-banner" />

        <School />

       
      </section>
    );
  }
}

export default Session;
