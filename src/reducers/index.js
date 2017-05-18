import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import { productReducer } from './productReducer'
import { loanAppReducer } from './loanAppReducer'

export default combineReducers({
  user: userReducer,
  product: productReducer,
  loanApp: loanAppReducer
})
