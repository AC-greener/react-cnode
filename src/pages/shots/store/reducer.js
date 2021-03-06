const defaultState = {
  shotsData: {}, 
}

const shotsReducer = (state = defaultState, action) => {
    if(action.type === 'get_shots_data') {
      let newState = {
        shotsData: action.data,
      }
      return newState
    }  
    return state
}
export default shotsReducer