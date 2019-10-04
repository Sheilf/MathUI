import React, { Component } from 'react';
import '../../styles/flexborder.css';
import './DeveloperBlog.css';
import Navigate from '../Navigate/Navigate';
import {Link} from 'react-router-dom';


//DeveloperBlog components are links to their respective chapters using component Subject
class DeveloperBlog extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
 
    
  }
  render() {

    let imgWidth = {minWidth: '275px', maxWidth: '100%'}
    return (



    
        <section className="DeveloperBlog">
            <div className="flex-border-row-centered" style={{position: 'fixed', height:'50px', backgroundColor: 'white', top: 0, width: '100%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'}}>
                
                <div id="toc" className="">
                    <Link to="/">Home</Link>
                    <a href="#new-tech">Technology</a>

                    <a href="#product-developments">Products</a>

                </div>
                
            </div>



            <h3 id="new-tech" style={{textAlign:'center'}}>Introducing new tech</h3>
            <div id="#new-tech-container" style={{display: 'flex', flexDirection:'column', alignItems:'center' }}>
                Eying these tools primarily as the sole developer - they may help achieve some long term builds. <br/>
                Education tooling is complex and deep.<br/>
                These tools may eventually speed the overall process of developing a new education product.<br/>


                <ul>
                    <li>
                        <h2>React Native</h2>
                        <code className="enthusiasm max-level">
                            Enthusiasm 100%
                            <div className="enthusiasm-bar" 
                                style={
                                    {
                                        width: '100%', 
                                        backgroundColor: '#00EBFF', 
                                        border: '1px solid black', 
                                        padding: '5px', 
                                        borderRadius: '9px',
                                        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'

                                    }
                                }>
                                &nbsp;
                                
                            </div>
                            <span style={{color:'black', textShadow: '0px 0px #000'}}>Critically important</span>

                        </code>
                   
                        <figure><img style={imgWidth} src="https://i.ytimg.com/vi/plTTFqbEiEE/maxresdefault.jpg"/></figure>
                        <p>
                         Education will move along with cloud services and mobile advancements. React Native is necessary to implement the product on mobile devices like school iPads or mobile devices globally.
                        </p>
                    </li>

                    <li>
                        <h2>Manim/P5js</h2>
                        <code className="enthusiasm max-level">
                            Enthusiasm 100%
                            <div className="enthusiasm-bar" 
                                style={
                                    {
                                        width: '100%', 
                                        backgroundColor: '#00EBFF', 
                                        border: '1px solid black', 
                                        padding: '5px', 
                                        borderRadius: '9px',
                                        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'

                                    }
                                }>
                                &nbsp;
                                
                            </div>
                            <span style={{color:'black', textShadow: '0px 0px #000'}}>Gorgeous visual libraries. It speaks for itself!</span>

                        </code>
                   
                        <figure><img style={imgWidth} src="https://thumbs.gfycat.com/ThunderousDaringGermanpinscher-size_restricted.gif"/></figure>
                        <p>
                            These animations need to be fluid and engaging to see and work with! They must inspire enthusiasm for learning.
                        </p>
                    </li>

                    <li>
                        <h2>Redux</h2>
                        <code className="enthusiasm medium-level">
                            Enthusiasm 60%
                            <div className="enthusiasm-bar" 
                                style={
                                    {
                                        width: '60%', 
                                        backgroundColor: 'gold', 
                                        border: '1px solid black', 
                                        padding: '5px', 
                                        borderRadius: '9px',
                                        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'

                                    }
                                }>
                                &nbsp;
                            </div>
                            <span style={{color:'black', textShadow: '0px 0px #000'}}>Unsure if necessary with well-written React</span>

                        </code>
                        
                        <figure><img style={imgWidth} src="https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg"/></figure>
                        <p>I am unsure how I feel about Redux or other reactive state management tools. React's specialty is handling state and it seems pretty intuitive to communicate with nodes along the Parent/Child graph. There are likely many benefits, architecturally, to using it long term that integrate with other tools or when working on a team. </p>
                    </li>

                    <li>
                        <h2>GraphQL</h2>
                        <code className="enthusiasm max-level">
                            Enthusiasm 100%
                            <div className="enthusiasm-bar" 
                                style={
                                    {
                                        width: '100%', 
                                        backgroundColor: '#00EBFF', 
                                        border: '1px solid black', 
                                        padding: '5px', 
                                        borderRadius: '9px',
                                        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'

                                    }
                                }>
                                &nbsp;
                                
                            </div>
                            <span style={{color:'black', textShadow: '0px 0px #000'}}>Increasing need for an API to organize content that's flexible with design changes.</span>

                        </code>
                   
                        <figure><img style={imgWidth} src="https://devopedia.org/images/article/147/8496.1558526064.jpg"/></figure>
                        <p>
                            Why not REST? The future of LearnUI and the components that will be created are uncertain and will likely be designed in a way that's not resistant to change. GraphQL appears to be a fluid and flexible approach that adapts to changes and overhauls of a design. I'm excited to start using GraphQL because the application is reaching a point where data is increasingly important to the future extension of the application.

                            I think GraphQL will make the process of designing an API more enjoyable and clearer to work with through its changes. I believe the end result will also reduce complexity, dependency on Google services, increase productivity, and add a major boost to overall maintenance and modularity.
                        </p>
                    </li>

                    <li>
                        <h2>DevOps - Google Cloud Run, Docker, Kubernetes, AWS</h2>
                        <code className="enthusiasm high-level">
                            Enthusiasm 80%
                            <div className="enthusiasm-bar" 
                                style={
                                    {
                                        width: '80%', 
                                        backgroundColor: '#53FF47', 
                                        border: '1px solid black', 
                                        padding: '5px', 
                                        borderRadius: '9px',
                                        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'

                                    }
                                }>
                                &nbsp;

                            </div>
                            <span style={{color:'black', textShadow: '0px 0px #000'}}>Useful longterm, learning curve and expertise gap</span>

                        </code>
                   
                        <figure><img style={imgWidth} src="https://hackernoon.com/hn-images/1*VxAJ5aCzUJtmVhdg290RXg.png"/></figure>
                        <p>
                            Buzzword mania! These tools seem fantastic when the product develops more maturally; with particular microservices like a chat server, the forum server, the LMS servers, and other app clusters. This is good stuff.
                            
                            These technologies seem wonderful for front/fullstack developers to get their feet wet with DevOps complexity. These workflows are attractive to me as a sole developer. It appears these clusters will improve my IT/Cloud infrastructure and will be a major piece of the product when it comes to implementing it for schools and other education clients. 
                        </p>
                    </li>

                    <li>
                        <h2>Cloud Functions</h2>
                        <code className="enthusiasm high-level">
                            Enthusiasm 90%
                            <div className="enthusiasm-bar" 
                                style={
                                    {
                                        width: '90%', 
                                        backgroundColor: '#53FF47', 
                                        border: '1px solid black', 
                                        padding: '5px', 
                                        borderRadius: '9px',
                                        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'

                                    }
                                }>
                                &nbsp;
                                
                            </div>
                            <span style={{color:'black', textShadow: '0px 0px #000'}}>Improve UX and tools for users! Increases Firebase dependency</span>

                        </code>
                   
                        <figure><img style={imgWidth} src="https://cloud.google.com/images/products/functions/virtual-assistants-graphic.svg"/></figure>
                        <p>
                            Event services integrated with Firebase backend platform will increase productivity for certains components and tools designed for teachers
                            or messaging/transaction products. It will make the UX smoother for developer and user. 
                        </p>
                    </li>




                </ul>  
            </div>

            <h3 id="product-developments">Product Developments</h3>
            <div>
                <h3>Products</h3>
                <ul>
                    <li>
                        <h2>Create Class</h2>
                    </li>
                    <li>
                        <h2>
                            Teach a Concept
                        </h2>
                    </li>

                    <li>
                        <h2>MathKeys</h2>
                    </li>

                    <li>
                        <h2>Awards and Progress</h2>
                    </li>

                    <li>
                        <h2>Forum Expansion</h2>

                    </li>

                    <li>
                        <h2>LearnUI expansion</h2>
                    </li>
                </ul>

                <h3>Technical</h3>
                <ul>
                    <li>
                        <h2>Rewrite</h2>
                    </li>
                    <li>
                        <h2>Modeling Behavior</h2>

                    </li>
                </ul>
            </div>  

            


        </section>   
   
    );
  }
}


export default DeveloperBlog;
