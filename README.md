# MathUI
A mathematics learning platform.
visit: https://mathui.firebaseapp.com

# What it is
Components are built with React & Firestore<br/>
see: https://sheilf.github.io/LearnUI-Project-Proposal

# Development Queue

<ol>
  <li>Component Descriptions</li>
  <li>Rework database design</li>
  <li>Implement point system</li>
</ol>



# Naming Conventions (development)

  <pre>
  <Index> Naming
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
          
          < div className="GenericComponent flex-combination" onClick={this.handleClick}>
                Generic Component text content
          </ div>
          `
      }


  </Index>
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

# Component Descriptions
  <h4></h4>
  <p></p>
  
  <h4></h4>
  <p></p>
  
  <h4></h4>
  <p></p>
  
  <h4></h4>
  <p></p>
  
  <h4></h4>
  <p></p>
  
# Database Design
  
# The Point System
<p>
The point system is based off similar practices done by Khan Academy with mastery and energy points. Students can earn points by interacting with the question and awards by completing certain objectives. The points awarded is what is returned from the student's subscription to the program. A student essentially needs to only receive 3 of the 6 points to complete a question. This is still a 100% complete. This is entirely up the the student and their choice of participation. Simply put: more effort translates to more points. More points means more of the subscription donated.
</p>

<h2> Question interactions </h2>
<b>6 Points per question</b>
<p>
  Visiting a question earns 1 point. 
</p>

<p>
  Attempting a question will earn one point. Answering correct on the first try will count the attempt and award a point for it.
</p>

<p>
 Answering a question correct will earn a point.
</p>

<p>
  Collecting a card from Notes will earn a point.
</p>

<p>
  Receiving a helpful post or helpful reply will earn a point in Discussion.
</p>

<p>
  Watching the video in its entirety will earn a point from Session.
</p>


<h2>Awards</h2>

<p>
 Awards wil be based on a combination of efforts made by the student. A simple example would be receiving an Award for completing the Fundamentals course. Perhaps there are questions that students rate positively but are answered at 60% success. Students that answer these questions may receive particular rewards for doing that. Other users may gravitate to using a forum more often than other users who prefer video direction. There are rewards to be reaped for doing what you prefer.
</p>

<p>
 The combinations are endless. The Awards will allow users to customize their math-bot profiles. There should be enough Awards that will allow users to feel proud of their achievements.
</p>
