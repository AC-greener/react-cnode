import { combineReducers} from 'redux'
import shotsReducer from '../pages/shots/store/reducer'
import mainReducer from '../pages/main/store/reducer'
import homeHeaderReducer from '../components/homeheader/store/reducer'
const rootReducer = combineReducers({
  shotsReducer,
  homeHeaderReducer,
  mainReducer
})
export default rootReducer