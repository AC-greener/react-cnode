import React from 'react';
import ReactDOM from 'react-dom';
import  HomeHeader  from '../components/homeheader/index'
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store/index'
import { Provider } from 'react-redux'

it('HomeHeader组件', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <HomeHeader />
      </Router>
    </Provider>, div);
})
