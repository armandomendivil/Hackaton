import { combineReducers } from 'redux'

import auth from './auth'
import quotes from './quotes'

// We combine the reducers here so that they
// can be left split apart above
const hackatonApp = combineReducers({
  auth,
  quotes,
})

export default hackatonApp
