import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state, action) => {
  if(state === undefined) {
    return {n: 10, showLoginModal: true}
  } else {
    if(action.type === 'add') {
      let newState = {n: state.n + action.payload}
      return newState
    } else if(action.type === 'change_login_modal') {
      console.log('value', action.value)
      let newState = {n: state.n, showLoginModal: action.value}
      return newState
    } else {
      return state
    }
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


