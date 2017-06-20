export const formLoanReducer = (state = {}, action) => {
  if (state == null) {
    return {};
  }
  switch(action.type) {
    case 'UPDATE_LOAN_FORM':
      return {...action.payload };
    default:
      return state;
  }
}
