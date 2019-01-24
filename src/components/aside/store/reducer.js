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
export default reducer