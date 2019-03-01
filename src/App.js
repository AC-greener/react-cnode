import React, { Component } from 'react';
import Aside from '../src/components/aside/index'
import Main from './pages/main/index'
import Login from './pages/login/index'
import Shots from './pages/shots/index'
import './style.css'

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router >
        {/* 
   "homepage" : "https://ac-greener.github.io/react-dribbble/build",
        
        */}
        <div className='app'>
          <Route exact path='/' component={Main} />
          <Route exact path='/aside' component={Aside}/>
          <Route exact  path='/shots/:id' component={Shots}/>
          <Route exact path='/login' component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
