/* import external modules */
import { combineReducers } from 'redux'

/* import external modules */
import user from './user'
import cart from './cart'

const rootReducer = combineReducers({
  user,
  cart,
})

export default rootReducer
