import React, { Component } from 'react';
import HomeHeader from '../src/components/homeheader/index'
import Aside from '../src/components/aside/index'
import All from './pages/all/index'
import Share from './pages/share/index'
import Job from './pages/job/index'
import Question from './pages/question/index'
import Essence from './pages/essence/index'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './style.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <HomeHeader />
          <Aside />
          <Route path='/' exact component={All}/>
          <Route path='/share' component={Share}/>
          <Route path='/job' component={Job}/>
          <Route path='/question'  component={Question}/>
          <Route path='/essence'  component={Essence}/>
        </div>
      </Router>
    );
  }
}

export default App;
