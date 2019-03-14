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
import { BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}> </Route>
            <Route exact path="/session" component={Session}> </Route>
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



