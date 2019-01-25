const defaultState = {
  n: 10, 
  showLoginModal: true
}

const reducer = (state = defaultState, action) => {
    if(action.type === 'add') {
      let newState = {n: state.n + action.payload}
      return newState
    }
    if(action.type === 'change_login_modal') {
      console.log('value', action.value)
      let newState = {n: state.n, showLoginModal: action.value}
      return newState
    }  
    return state
}
export default reducer