import { combineReducers } from 'redux'

import auth from './auth'
import app from './app'
import products from './products'

export default combineReducers({
  auth,
  app,
  products
})
