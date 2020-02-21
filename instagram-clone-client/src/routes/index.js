import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './home'; 
import Login from './login'; 
import 'semantic-ui-css/semantic.min.css';  

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
        </Switch>
    </Router>
)
  