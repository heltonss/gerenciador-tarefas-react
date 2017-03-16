'use strict'
import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Todo from '../todo/Todo';
import About from '../about/about';

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Todo}></Route>
        <Route path='/about' component={About}></Route>
        <Redirect from='*' to='/tarefas' />
    </Router>
)