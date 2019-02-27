const defaultState = {
  shotsData: [], 
  rowArrangement: true

}

const mainReducer = (state = defaultState, action) => {
    if(action.type === 'init_shots_data') {
      let newState = {
        shotsData: action.data,
        rowArrangement: true
      }
      return newState
    }  
    return state
}
export default mainReducer