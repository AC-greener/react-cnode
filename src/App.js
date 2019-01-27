import React, { Component } from 'react';
import HomeHeader from '../src/components/homeheader/index'
import Aside from '../src/components/aside/index'
import Main from './pages/main/index'
import './style.css'

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <HomeHeader />
          <Aside />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
