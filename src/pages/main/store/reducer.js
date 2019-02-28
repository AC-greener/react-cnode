const defaultState = {
  shotsData: [],
  rowArrangement: true,
  colClicked: false,
  rowClicked: true

}

const mainReducer = (state = defaultState, action) => {
  if (action.type === 'init_shots_data') {
    let newState = {
      shotsData: action.data,
      rowArrangement: state.rowArrangement,
      colClicked: state.colClicked,
      rowClicked: state.rowClicked
    }
    return newState
  }
  if (action.type === 'change_row_display') {
    let newState = {
      shotsData: state.shotsData,
      rowArrangement: true,
      colClicked: false,
      rowClicked: true
    }
    return newState
  }
  if (action.type === 'change_col_display') {
    let newState = {
      shotsData: state.shotsData,
      rowArrangement: false,
      colClicked: true,
      rowClicked: false
    }
    return newState
  }
  return state
}
export default mainReducer