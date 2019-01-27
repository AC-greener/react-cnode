const defaultState = {
  n: 10, 
  showLoginModal: false
}

const asideReducer = (state = defaultState, action) => {
  console.log(state, action)
    if(action.type === 'change_login_modal') {
      let newState = { n: state.n, showLoginModal: action.value }
      console.log('newState', newState)
      return newState
    }  
    return state
}
export default asideReducer