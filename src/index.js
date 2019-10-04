import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/global.css';
import App from './App';
import Session from './components/Session/Session';
import Subject from './components/Subject/Subject';
import StudyRoom from './components/StudyRoom/StudyRoom';
import Keyboard from './components/Keyboard/Keyboard';
import ForumView from './components/ForumView/ForumView';
import Navigate from './components/Navigate/Navigate';
import Stats from './components/Stats/Stats';
import { BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

function displayMenu(event){
    let menu = document.getElementById("menu");
    if(menu){    
        if(event.target.id==="edu-menu"){
            menu.style.display="flex"
        }else{
            menu.style.display="none";
        }
    }
}
ReactDOM.render(

    <BrowserRouter>
        <div onClick={(event) => displayMenu(event)}>
            <Route exact path="/" component={App}> </Route>
            <Route exact path="/session" component={Session}> </Route>
            <Route exact path="/stats" component={Stats}> </Route>
            <Route exact path="/session/:classroom" component={Subject}> </Route>
            <Route exact path="/session/:classroom/:topic" component={StudyRoom}> </Route>
            <Route exact path="/session/:classroom/:topic/:question/forum/:id" component={ForumView}></Route>
            <Route exact path="/keyboard" component={Keyboard}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



