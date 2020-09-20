import { combineReducers } from 'redux'

import auth from './auth'
import app from './app'
import products from './products'
import cart from './cart'

export default combineReducers({
  app,
  auth,
  cart,
  products
})
