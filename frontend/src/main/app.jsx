'use strict'
import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import Routes from './routes';

import Menu from '../template/menu'


//os parenteses não é o corpo do método é uma expressão.
export default (props) => (
    <div>
        <Menu/>
        <Routes/>
       
    </div>
)