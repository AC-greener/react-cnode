import { combineReducers} from 'redux'
import asideReducer from '../components/aside/store/reducer'
import homeHeaderReducer from '../components/homeheader/store/reducer'
const rootReducer = combineReducers({
  asideReducer,
  homeHeaderReducer
})
export default rootReducer