# MathUI
A mathematics learning platform.
visit: https://mathui.firebaseapp.com

# What it is
Components are built with React & Firestore<br/>
see: https://sheilf.github.io/LearnUI-Project-Proposal

# Todo
Oh god the backlog gets thicker and thicker.

<ul>
  <li>Initiate teacher domain</li>
  <li>Implement subscriptions (after filing 501-3c)</li>
  <li>Create coin and distribution system(s)</li>
  <li>Design & implement & integrate the Keyboard component**</li>
  <li>Design & implement the QuestionDisplay component</li>
  <li>Create own videos**</li>
  <li>Student Stats page</li>
  <li>Upgrade Lectio/Notes component with animated and collectable cards for stats page</li>

</ul>

# Tedious Todos
<ul>
  <li>Create subject/topic icons</li>
  <li>Update/generalize a default video for Session/Exempli Assistant</li>
</ul>

# Completed
<ul>
  <li>Design & implement the Forum / Tabula component</li>
  <li>Design & implement the Animated Reading / Lectio component**</li>
  <li>Studyroom application navigation and de-bordering</li>
</ul>


# Work in progress
<ul>
  <li>Student account stats/data collection</li>
  <li>Coin/point system</li>
  <li>Collectible card system</li>
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


# The Point System
<p>
The point system is based off similar practices done by Khan Academy with mastery and energy points. Students can earn points by interacting with the question and awards by completing certain objectives.
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
