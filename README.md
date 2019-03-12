# MathUI
A mathematics learning platform.

# What it is
Components are built with React & Firestore

# Todo

<ul>
  <li>Navigation visual design</li>
  <li>Initiate teacher domain</li>
  <li>Create coin and distribution system(s)</li>
  <li>Design & implement & integrate the Keyboard component**</li>
  <li>Studyroom application navigation and de-bordering</li>
  <li>Design & implement the Forum / Tabula component</li>
  <li>Design & implement the Animated Reading / Lectio component**</li>
  <li>Design & implement the QuestionDisplay component**</li>
  <li>Create own videos**</li>
</ul>



# Naming Conventions (development)

  <pre>

  import *;
   let db= firebase.firestore();
   let users = db.collection('users');

  class GenericComponent extends Component{
      constructor(props){
          super(props)
          this.state={
            clicked: "clicked"
          }
          this.handleClick = this.handleClick.bind(this);
      }

      componentDidMount(){ //class function*/
  
          firebase.auth().onStateChanged(user => {
                this.setState({
                    currUser: user.uid
                })

           })
      }

      componentDidUpdate(){
          //alert(upward traversal)
      
      }


      handleClick(event){ //class function
          
          alert(event.target.textContent)

          
      }
      
      render(){
          <section className="GenericComponent flex-combination" onClick={this.handleClick}>
                Generic Component text content
          </section>
      }


  
  </pre>



1. use class component
  <pre>
  class GenericComponent extends Component{
      constructor(props){
          super(props)
          this.state={
          }
                    
      }
  }
  </pre>
2. Use arrow functions inside class functions


# Components

