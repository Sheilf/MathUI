import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './Subject.css';
import TopicList from '../TopicList/TopicList';
import Navigate from '../Navigate/Navigate';


//Generate list of topics using the front end instead of calling the database
//can be rewritte as a map
class Subject extends Component {
  constructor(props){
    super(props);
    this.state={
      topicList: [],
          classroom: "",
          mounted: false
    }

    this.loadPage=this.loadPage.bind(this);
  }

  componentDidMount(){
    let classroomRouteParam = this.props.match.params.classroom;
    let currentClassroom = this.state.classroom;
    
    let topicListCopy;
    
    switch (classroomRouteParam) {
      case 'Fundamentals':
        currentClassroom="Fundamentals";
        topicListCopy = ["Counting", "Addition & Subtraction", "Place Values", "Measurement", "Shapes"]
        break;
      case 'Arithmetic':
        currentClassroom="Arithmetic";
        topicListCopy = ["Addition & Subtraction", "Multiplication & Division", "Negative Numbers", "Fractions", "Decimals"]
        break;
      case 'Prealgebra':
        currentClassroom="Prealgebra";
        topicListCopy = ["Arithmetic Properties", "Factors & Multiples", "Reading Data", "Measurement", "Fractions", "Decimals", "Coordinate Plane", "Ratios, rates, & Proportions", "Equations, Expressions, & Inequalities", "Exponents, Radicals, & Scientific Notation"]
        break;
      case 'AlgebraI':
        currentClassroom="Algebra I";
        topicListCopy = ["Algebra I Foundations", "Solving Equations", "Solving Inequalities", "Units & Measurement", "Linear Equations & Graphs", "Functions", "Linear Word Problems", "Sequences", "Systems of Equations", "Inequalities in Systems & Graphs", "Absolute Value & Piecewise Functions", "Rational Exponents & Radicals", "Exponential Growth & Decay", "Polynomials", "Factorization", "Quadratics", "Irrational Numbers"];
        break;
      case 'Geometry':
        currentClassroom="Geometry";
        topicListCopy = ["Geometry Foundations", "Transformations", "Congruence", "Similiarity", "Right Triangles & Trigonometry", "Solid Geometry", "Analytical Geometry", "Circles"]
        break;
      case 'AlgebraII':
        currentClassroom="Algebra II";
        topicListCopy = ["Functions", "Complex Numbers", "Arithmetic with Polynomials", "Polynomials", "Radical Relationships", "Rational Relationships", "Exponential Growth & Decay", "Exponentials & logarithms", "Trigonometry", "Advanced Equations & Functions", "Series", "Modeling", "Conic Sections"]
        break;
      case 'Trigonometry':
        currentClassroom="Trigonmetry";
        topicListCopy = ["Right Triangles", "General Triangles", "Unit Circle", "Trigonometric Functions", "Trigonometric Equations & Identities"];
        break;
      case 'Precalculus':
        currentClassroom="Precalculus";  
        topicListCopy = ["Trigonometry Foundations", "Conic Sections", "Vectors", "Matrices", "Complex Numbers", "Probability & Combinatorics", "Series"];
        break;
      case 'Statistics':
        currentClassroom="Statistics";
        topicListCopy = ["Analyzing Categorical Data", "Displaying & Comparing Quantitative Data", "Summarizing Quantitative Data", "Modeling Data Distributions", "Exploring Bivariate Numerical Data", "Design", "Probability", "Counting, Permutations, & Combinations", "Random Variables", "Sampling Distributions", "Confidence Intervals", "Significance & Hypothesis Testing", "Two-Sample Inference", "Inference for Categorical Data", "Advanced Regression", "Analysis of Variance"];
        break;
      case 'DifferentialCalculus':
        currentClassroom="Differential Calculus";
        topicListCopy = ["Limits & Continuity", "Differentiation Basics", "Derivatives", "Applications of Derivatives"]
        break;
      case 'IntegralCalculus':
        currentClassroom="Integral Calculus";
        topicListCopy = ["Derivative Foundations", "Integration & Change", "Applications of Integration", "Parametric Equations", "Polar Coordinates", "Vector Functions", "Series & Sequences"]
        break;
      case 'MultivariableCalculus':
        currentClassroom="Multivariable Calculus";
        topicListCopy = ["Calculus Foundations", "Thinking beyond 2D", "Derivatives in Multidimensions", "Integrating in Multidimensions", "Convergence & Divergence", "Green & Stoke Theorems"]
        break;
      default:
        alert( "There was an error retrieving the list of chapters." );
    }

    this.setState({
      topicList: topicListCopy,
      classroom: currentClassroom
    })
    
  }

  loadPage(event){
    this.setState({
      mounted: true
    })
    document.getElementById('subject').style.visibility = 'visible';

    document.getElementById('subject').style.opacity = 1;

  }

  render() {   
    return (
      <section id="subject" className="Subject flex-border-column-centered" onLoad={this.loadPage}>
        <Navigate from="subject" />

        <h1>{this.state.classroom}</h1>
        <TopicList classroom={this.props.match.params.classroom} topics={this.state.topicList}/>
      </section>
  );
  }
}



export default Subject;
