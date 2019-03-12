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
  
  //1.Call DB at top
  
  let db= firebase.firestore();
  let users = db.collection('users');

  //2. use class components.
  
  class GenericComponent extends Component{ 
      constructor(props){
          super(props)
          this.state={
            clicked: "clicked"
          }
          
          //3. bind events in constructor
          this.handleClick = this.handleClick.bind(this);
      }

      componentDidMount(){ //class function*/
  
  
          //4. use arrow functions/lambdas after class functions are called
          firebase.auth().onStateChanged(user => {
                this.setState({
                    currUser: user.uid
                })

           })
      }

      componentDidUpdate(){
          //alert("upward traversal")
      
      }


      handleClick(event){ //class function
          
          //5. Use the event object.
          alert(event.target.textContent)

          
      }
      
      render(){
          //6. className="NameOfClass"
          //7. See: flexborder.css for flex-combinations
          //8. Call event={this.handleEvent}
          <section className="GenericComponent flex-combination" onClick={this.handleClick}>
                Generic Component text content
          </section>
      }


  
  </pre>





# Components

