const initialState = {
  isLoading: false,
  loans: []
};

export const loanAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOAN_SUCCESS':
      return {...state, loans: [...state.loans, action.payload]};
    case 'ADD_LOAN_REQUEST':
      return {...state, isLoading: true}
    case 'ADD_LOAN_SUCCESS':
      return {...state, isLoading: false, loans: [...state.loans, action.payload]}
    default:
      return state
  }
}
