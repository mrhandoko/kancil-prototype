import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { productReducer } from './productReducer';
import { loanAppReducer } from './loanAppReducer';
import { partnerReducer } from './partnerReducer';
import { userDetailReducer } from './userDetailReducer';
import { formLoanReducer } from './formLoanReducer';

export default combineReducers({
  user: userReducer,
  product: productReducer,
  loanApp: loanAppReducer,
  partner: partnerReducer,
  userDetail: userDetailReducer,
  formLoan: formLoanReducer,
});
