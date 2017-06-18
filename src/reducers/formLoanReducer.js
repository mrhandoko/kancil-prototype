export const formLoanReducer = (state = {}, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return action.payload;
    default:
      return state;
  }
}
