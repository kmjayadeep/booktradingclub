import { h } from 'preact'
import Router from 'preact-router'

import Topbar from './components/Topbar'
import './App.css';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NotFound from './containers/NotFound';

//url is only used in server
export default ({url}) => (
    <div>
        <Topbar/>
        <Router url={url}>
            <Home path="/"/>
            <Login path="/login"/>
            <Signup path="/signup"/>
            <NotFound default/>
        </Router>
    </div>
)