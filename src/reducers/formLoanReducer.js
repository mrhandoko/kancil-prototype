export const formLoanReducer = (state = {}, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      console.log('cantik kau meyta', action.payload.formLoan);
      return action.payload
    default:
      return state;
  }
}
