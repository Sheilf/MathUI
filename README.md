# MathUI
A mathematics learning platform.
visit: https://mathui.firebaseapp.com

# What it is
Components are built with React & Firestore<br/>
see: https://sheilf.github.io/LearnUI-Project-Proposal

# Todo

<ul>
  <li>Navigation visual design</li>
  <li>Initiate teacher domain</li>
  <li>Create coin and distribution system(s)</li>
  <li>Design & implement & integrate the Keyboard component**</li>
  <li>Studyroom application navigation and de-bordering</li>
  <li>Design & implement the Forum / Tabula component <b> COMPLETED 3/13 </b></li>
  <li>Design & implement the Animated Reading / Lectio component**</li>
  <li>Design & implement the QuestionDisplay component**</li>
  <li>Create own videos**</li>
</ul>

# Work in progress
<ul>
  <li>Refactoring code and adding comments on basic component functionality</li>
  <li>Updating Basic Visual Design</li>
  <li>Implementing Teacher Portal</li>
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
          //8. Call event={this.handleEvent} //

          <\section className="GenericComponent flex-combination" onClick={this.handleClick}>
                Generic Component text content
          <\/section>
      }


  
  </pre>





# Components
<code>

<Index> Root 
  <App> 
     <Banner />
     <Login route to Session />
     
     <Session>
        <Banner />
        <School>
          [...<Classrooms route to Subject />]  //classrooms 1..12
        </School>        
     </Session>
     
     <Subject>
        <TopicList>
          <Topic route to StudyRoom />
        </TopicList>
      </Subject>
      
      
       <StudyRoom>
          <QuestionGenerator>
            [...<Question renders QuestionDisplay/>] //[1..10]
          </QuestionGenerator>
          
          <QuestionDisplay>
            <Form />
            <MathKeys />
          </QuestionDisplay>
          
          <Assistant>
            <NotesAssistant render Teacher/>
            <DiscussAssistant render Teacher/>
            <SessionAssistant render Teacher/>
            
            <Teacher render Notes : Discuss : Session />
              <Notes>
                <Card>
                  <Sketch renders animation />
                <Card>
                <Content/>
              </Notes>
              
              <Discuss>
                <Post />
                <Forum>
                  [...<Threads route to Threads/>] //1..n
                </Forum>
              </Discuss>
              
              <Session>
                <Video />  
              </Session>
              
             </Teacher>
          </Assistant>
        
       </StudyRoom>
       
       
       <Thread />
          <Sub-application with mathkey components />
       <Thread /> 

    
      
  </App>

</Index>

</code>
