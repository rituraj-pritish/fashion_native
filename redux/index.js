import { combineReducers } from 'redux'

import auth from 'app/redux/auth'
import app from 'app/redux/app'

export default combineReducers({
  auth,
  app
})
