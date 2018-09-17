import { h } from 'preact'
import Router from 'preact-router'

import Topbar from './components/TopBar'
import './App.css';

import Login from './containers/Login';

export default () => (
    <div>
    <Topbar/>
    <Router>
        <Login path="/login"/>
    </Router>
    </div>
)