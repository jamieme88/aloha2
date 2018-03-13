const initialState = {
  key: '',
}

const selectReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT':
      return {
        ...state,
        key: state.key + action.key
      }
    default: 
      return state;
    }
  }

export default selectReducer;
