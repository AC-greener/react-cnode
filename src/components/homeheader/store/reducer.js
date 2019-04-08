const defaultState = {
  showDisplayOptions: true,
  colClicked: false,
  rowClicked: true
}
const homeHeaderReducer = (state = defaultState, action) => {
 if (action.type === "show_display_option") {
  let newState =  {
    showDisplayOptions: !state.showDisplayOptions
  }
  return newState
 }
  return state
}
export default homeHeaderReducer