# Table of Contents

<a href="#MathUI">1.0 MathUI </a>


<a href="#What_it_is">2.0 What it is </a>
<br/>

<a href="#Development_Queue">3.0 Development Queue </a>
<br/>

<a href="#Naming_Conventions">4.0 Development Queue </a>
<br/>

<a href="#Components">5.0 Components </a>
<br/>

<a href="#Database_Design">6.0 Database Design </a>
<br/>

<a href="#The_Point_System">7.0 The Point System </a>
<br/>

<a href="#Component_Descriptions">8.0 The Component Descriptions </a>
<br/>

<h1 id="MathUI">1.0 MathUI </h1>
A mathematics learning platform.
visit: https://mathui.firebaseapp.com

<h1 id="What_it_is">2.0 What it is </h1>
Components are built with React & Firestore<br/>
see: https://sheilf.github.io/LearnUI-Project-Proposal

<h1 id="Development_Queue">3.0 Development Queue </h1>

<ol>
  <li>Add state and events to Component Descriptions.</li>
  <li>Implement point system</li>
</ol>


<h1 id="Naming_Conventions">4.0 Naming Conventions </h1>


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
          < /div>
          `
      }


  </Index>
  </pre>





<h1 id="Components">5.0 Components</h1>
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


  
<h1 id="Database_Design">6.0 Database Design</h1>


<img src="https://res.cloudinary.com/eduprojectsil/image/upload/v1554007225/Untitled-1_y1udww.png"/>
  
<h1 id="The_Point_System">7.0 The Point System</h1>
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



<h1 id="component_Descriptions">8.0 Component Descriptions</h1>

  <h4>App</h4>
  <div>Contains:</div> 
  <ol>
    <li>Banner</li>
    <li>Login</li>
  </ol>
  
  <div>Props: </div>
  <ul>
    <li>None</li>
  </ul>
  <p>App is a stateless presentation component that displays the landing page. Users are instructed to create their accounts.</p>
  
  <h4>Banner</h4>
  <div>Contains:</div> 
  <ol>
    <li>none</li>
  </ol>
    <div>Props:</div>
  <ul>
    <li>heading</li>
    <li>subeading</li>
  </ul>
  <p>Banner is a stateless presentation component that displays instructions for users to navigate the site</p>
  
  <h4>Login</h4>
  <div>Contains:</div>
  <ol>
    <li>Redirect to Session</li>
  </ol>
    <div>Props: </div>
  <ul>
    <li>none</li>
  </ul>
  <p>Login component returns 3 options to register/login in using Google, Facebook, and Email</p>
  
  <h4>Session</h4>
  <div>Contains:</div>
  <ol>
    <li>Navigate</li>
    <li>Banner</li>
    <li>School</li>

</ol>
    <div>Props: </div>
  <ul>
    <li>None</li>
  </ul>
  <p>The session component is initiated after a user logs in. It renders the components necessary to select a course from our School component. It initiates the user's database on first login.</p>
  
  <h4>Navigate</h4>
  <div>Contains:</div>
  <ol>
    <li>Link route to Stats</li>
  </ol>
    <div>Props: </div>
  <ul>
    <li>from</li>
  </ul>
  <p>Navigate component grants users three options: previous page,  my stats page, and signout. The from prop will decide the color of the navigation icons (UI)</p>
  
  <h4>School</h4>
  <div>Contains</div>
  <ol>
    <li>Classroom x12</li>
  
  </ol>
    <div>Props:</div>
  <ul>
    <li>none</li>
  </ul>
  <p>School component holds a set of Classroom components</p>
  
  <h4>Classroom</h4>
  <div>Contains:</div>
  <ol>
  <li>Link route to Subject</li>

  </ol>
  
  <div>Props: </div>
  <ul>
    <li>classroom</li>
    <li>name</li>
    <li>imgSrc</li>
  </ul>
  <p>Classroom is a component that renders a link to its respective chapters. It's a presentational component containing a name and icon.</p>
  
  
    
  <h4>Subject</h4>
  <div>Contains:</div>
  <ol>
    <li>Navigate</li>
    <li>TopicList</li>
  </ol>
  
  <div>Props: </div>
  <ul>
   <li>Routes from /session/:classroom, uses this.props.match.params.classroom</li>
  
  </ul>
  <p>Subject contains a list of topics from the respective course.</p>
  
  <h4>TopicList</h4>
  <div>Contains</div>
  <ol>
    <li>Topic</li>

  </ol>
  
  <div>Props: </div>
  <ul>
   <li>classroom</li>
   <li>topics[]</li>
  
  </ul>
  <p>TopicList generates a list of topics</p>
  
  <h4>Topic</h4>
  <div>contains:</div>
  <ol>
    <li>Link route to respective Studyroom</li>

  </ol>
  
  <div>Props: </div>
  <ul>
   <li>chapterCount</li>
   <li>classroom</li>
   <li>topic</li>
   <li>routemap</li>

  
  </ul>
  <p>Topic is a component that renders an heading and image and sends you to the chapter's respective studyroom</p>
  
  <h4>StudyRoom</h4>
  <div>Contains</div>
  <ol>
    <li>Navigate</li>
    <li>QuestionGenerator</li>
    <li>QuestionDisplay</li>
    <li>Assistant</li>
  
  </ol>
  
  <div>Props:  </div>
  <ul>
   <li>match.params.classroom</li>
   <li>match.params.topic</li>
   
  </ul>
  <p>StudyRoom is the parent component to the application. It renders a list of 10 questions, a question display, and an assistant and allows users to navigate between questions, trace and store performance/mastery actions to a database, answer questions, and use different assistant functions to learn more about the question.</p>
  
   <h4>QuestionGenerator</h4>
  <div>Contains</div>
  <ol>
    <li>Question</li>
  </ol>
  
  <div>Props: </div>
  <ul>
   <li>classroom</li>
   <li>chapter</li>
   <li>onQuestion</li>
   <li>questionSet</li>


  </ul>
  <p>QuestionGenerator generates a list of 10 questions to be navigated  by the user.</p>
      
      
  <h4>Question</h4>
  <div>Contains</div>
  <ol>
    <li>none</li>
  </ol>
  
  <div>Props: </div>
  <ul>
   <li>course</li>
   <li>chapter</li>
   <li>questionCount</li>
  
  </ul>
  <p>The individual Questions generated by QuestionGenerator. Keeps track of user visits.</p>
  
  <h4>QuestionDisplay</h4>
  <div>Contains</div>
  <ol>
    <li>TBD</li>

  </ol>
  
  <div>Props: </div>
  <ul>
   <li>Chapter</li>
   <li>Course</li>
   <li>onQuestion</li>
  
  </ul>
  <p>Displays the current question. Unclear as to what other components will be added (keyboard, etc)</p>
  
  
  <h4>Assistant</h4>
  <div>Contains:</div>
  <ol>
    <li>Lectio</li>
    <li>Tabula</li>
    <li>Exempli</li>
    <li>Teacher</li>



  </ol>
  
  <div>Props: </div>
  <ul>
   <li>course</li>
   <li>chapter</li>
   <li>onQuestion</li>
   <li>displayState</li>
  
  </ul>
  <p>Assistant is a parent component that contains the buttons that render the notes, videos, and forum resources</p>
  

  <h4>Lectio, Taula, Exempli</h4>
  <div>Contains</div>
  <ol>
    <li>none</li>

  </ol>
  
  <div>Props: </div>
  <ul>
   <li>none</li>
  
  </ul>
  <p>Lectio(Notes), Tabula(Discussion board), and Exempli(Video) are button components</p>
  
  <h4>Teaher</h4>
  <div>Contains</div>
  <ol>
    <li>Notes</li>
      <li>TabulaFora -> rename to Discussion</li>
      <li>Exempli -> rename to Example</li>


  </ol>
  
  <div>Props: </div>
  <ul>
   <li>display</li>
   <li>course</li>
     <li>chapter</li>
     <li>onQuestion</li>
  
  </ul>
  <p>Teacher renders the actual content of the button that the user chooses.</p>
   
  <h4>Notes</h4>
  <div>Contains</div>
  <ol>
    <li>NoteCard</li>
    <li>TBD</li>
  </ol>
  
  <div>Props: </div>
  <ul>
   <li>course</li>
     <li>chapter</li>
     <li>onQuestion</li>
  </ul>
  <p>Notes is the parent container of the content disiplay. It will get its contents from a database based on its course/chapter/question </p>
  
   <h4>NoteCard</h4>
  <div>Contains</div>
  <ol>
    <li>Sketch</li>
  <li>TBD</li>

  </ol>
  
  <div>Props: </div>
  <ul>
      <li>course</li>
     <li>chapter</li>
     <li>onQuestion</li>
    
  
  </ul>
  <p>Notecards are collectibles that award users points. It contains a canvas component</p>
  
   <h4>Sketch</h4>
  <div>Contains</div>
  <ol>
    <li>none</li>

  </ol>
  
  <div>Props: </div>
  <ul>
   <li>course</li>
  <li>chapter</li>
  <li>onQuestion</li>
  
  </ul>
  <p>Sketch is a canvas component that renders an animation or drawing. </p>
  --
  <h4>Discussion</h4>
  <div>Contains</div>
  <ol>
    <li>ForumThread</li>
    <li>ForumPost</li>

  </ol>
  
  <div>Props: </div>
  <ul>
   <li>course</li>
  <li>chapter</li>
  <li>onQuestion</li>
  
  </ul>
  <p>Discussion is the parent component to the forum and its functionality.</p>
  
  <h4>ForumThread</h4>
  <div>Contains:</div>
  <ol>
  <li>Link route to ForumView</li>
  </ol>
  <div> Props: </div>
  <ul>
  <li>course, chapter, question</li>
   <li>title</li>
   <li>id</li>

  </ul>
  <p>Threads that a user can select to view the post and its comments.</p>
  
  <h4> ForumView TBD</h4>
  <div>Contains:</div>
  <ol>
  <li></li>
  </ol>
  <div> Props: </div>
  <ul>
  <li></li>
  </ul>
  <p></p>
  
  <h4>ForumPost</h4>
  <div>Contains:</div>
  <ol>
  <li>TBD</li>
  </ol>
  <div> Props: </div>
  <ul>
  <li>TBD</li>
  </ul>
  <p>Allows a user to post a thread</p>
  
  
  <h4>Example, Stats, Keyboard TBD</h4>
  <div>Contains:</div>
  <ol>
  <li></li>
  </ol>
  <div> Props: </div>
  <ul>
  <li></li>
  </ul>
  <p></p>
  --
  <h4></h4>
  <div>Contains:</div>
  <ol>
  <li></li>
  </ol>
  <div> Props: </div>
  <ul>
  <li></li>
  </ul>
  <p></p>
  
