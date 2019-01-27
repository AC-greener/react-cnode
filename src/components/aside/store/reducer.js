const defaultState = {
  n: 10, 
  showLoginModal: false
}

const asideReducer = (state = defaultState, action) => {
    if(action.type === 'change_login_modal') {
      let newState = { n: state.n, showLoginModal: action.value }
      return newState
    }  
    return state
}
export default asideReducer