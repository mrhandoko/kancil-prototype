const initialState = {}

export const loanAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOAN_DATA':
      return [...state, action.payload];
    default:
      return state
  }
}
