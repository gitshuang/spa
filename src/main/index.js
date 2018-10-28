import React from 'react';
import './index.less';
import {  Route, Switch } from 'react-router-dom';
import Detail from '../detail/index.js';
import List from '../list/index.js';




export default class Main extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {

        return (
          <Switch>
            <Route path="/classify/:num" component={List}></Route>
            <Route path="/detail/:num" component={Detail}></Route>
          </Switch>  
        );
    }
}