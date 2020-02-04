
// initial global state
const initialState = {
  counter: 0,
  isAuthenticated: false,
  tasks: [],
  username: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter +1
      }
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter -1
      }
    case 'USER_SAVED':
      return {
        ...state,
        username: action.username
      }
    }
  // if(action.type ==='INCREMENT_COUNTER') {
  //   return {
  //     ...state,
  //     counter: state.counter + 1
  //   }
  // }
  // else if(action.type ==='DECREMENT_COUNTER') {
  //   return {
  //     ...state,
  //     counter: state.counter - 1
  //   }
  // }
  // else if(action.type ==='USER_SAVED') {
  //   return {
  //     ...state,
  //     username: action.username
  //   }
  // }
  return state
}

export default reducer