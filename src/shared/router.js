import { h } from 'preact'
import Router from 'preact-router'

import Topbar from './components/TopBar'
import './App.css';

import Login from './containers/Login';
import Signup from './containers/Signup';
import NotFound from './containers/NotFound';

export default () => (
    <div>
        <Topbar/>
        <Router>
            <Login path="/login"/>
            <Signup path="/signup"/>
            <NotFound default/>
        </Router>
    </div>
)